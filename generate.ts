/**
 * @fileoverview
 *
 * Centralized code generation script for both @fartlabs/ht and @fartlabs/htx packages.
 * This script generates TypeScript files for HTML, SVG, and MathML elements based on
 * data from the Browser Compatibility Data (BCD) project.
 */

import { toCamelCase, toKebabCase, toPascalCase } from "@std/text";
import type { SourceFile } from "ts-morph";
import { Project } from "ts-morph";
import bcd from "@mdn/browser-compat-data" with { type: "json" };

/**
 * Custom toSnakeCase that doesn't insert underscores between letters and numbers.
 * For example: "h1" stays as "h1", not "h_1".
 */
function toSnakeCase(input: string): string {
  // If input contains hyphens, replace them with underscores
  if (input.includes("-")) {
    return input.replace(/-/g, "_").toLowerCase();
  }
  // Otherwise, return as-is in lowercase
  return input.toLowerCase();
}

/**
 * Custom toConstantCase that doesn't insert underscores between letters and numbers.
 * For example: "h1" becomes "H1", not "H_1".
 */
function toConstantCase(input: string): string {
  // If input contains hyphens, replace them with underscores and uppercase
  if (input.includes("-")) {
    return input.replace(/-/g, "_").toUpperCase();
  }
  // Otherwise, return as-is in uppercase
  return input.toUpperCase();
}

/**
 * bcdElementEventNames is a list of all element event names in BCD.
 */
const bcdElementEventNames: string[] = Object.keys(bcd.api.Element)
  .filter((key) => key.endsWith("_event"))
  .map((key) => key.toLowerCase().replace(/_event$/, ""))
  .toSorted();

/**
 * voidElements is a list of all void elements in HTML.
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
 */
const voidElements = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
] as const;

/**
 * voidElementSet is a set of all void elements in HTML.
 */
const voidElementSet = new Set<string>(voidElements);

/**
 * booleanAttributes is a set of all boolean attributes in HTML.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes
 */
const booleanAttributes: Set<string> = new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "truespeed",
]);

/**
 * isVoid returns true if the given tag is a void element.
 */
function isVoid(tag: string): boolean {
  return voidElementSet.has(tag);
}

/**
 * Descriptor represents the data for an HTML element.
 *
 * From this data, we can generate a TypeScript file for each element.
 */
interface Descriptor {
  tag: string;
  functionName: string;
  propsInterfaceName: string;
  isVoid: boolean;
  attrs: string[];
  description?: string;
  see?: string;
  isDeprecated?: boolean;
  isExperimental?: boolean;
  category: "html" | "svg" | "mathml";
}

/**
 * getAttrs returns the attributes for the given HTML element tag.
 */
function getAttrs(tag: string): string[] {
  return Object.keys(bcd.html.elements[tag])
    .filter((attr) => !attr.includes("_"));
}

/**
 * getSvgAttrs returns the attributes for the given SVG element tag.
 */
function getSvgAttrs(tag: string): string[] {
  return Object.keys(bcd.svg.elements[tag])
    .filter((attr) => !attr.includes("_"));
}

/**
 * getMathmlAttrs returns the attributes for the given MathML element tag.
 */
function getMathmlAttrs(tag: string): string[] {
  return Object.keys(bcd.mathml.elements[tag])
    .filter((attr) => !attr.includes("_"));
}

/**
 * getInputTypes returns the types of input elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 */
function getInputTypes(): string[] {
  const re = /^type_/;
  if (!bcd.html.elements.input) return [];
  return Object.keys(bcd.html.elements.input)
    .filter((attr) => re.test(attr))
    .map((attr) => attr.replace(re, ""));
}

/**
 * toFunctionName converts the given string to a valid function name.
 */
function toFunctionName(s: string): string {
  // Handle special cases to avoid conflicts.
  if (s === "var") {
    return "var_";
  }
  if (s === "switch") {
    return "switch_";
  }

  if (s.includes("-")) {
    return toCamelCase(s);
  }

  return s;
}

/**
 * toDocs is a helper function that converts the given data to a JSDoc comment.
 */
function toDocs(data: {
  description?: string;
  see?: string;
  isDeprecated?: boolean;
  isExperimental?: boolean;
}): Record<string, unknown>[] | undefined {
  const doc: Record<string, unknown> = {};
  if (data.description) {
    doc.description = data.description;
  }

  const tags = [];
  if (data.see) {
    tags.push({ tagName: "see", text: `<${data.see}>` });
  }

  if (data.isDeprecated) {
    tags.push({ tagName: "deprecated" });
  }

  if (data.isExperimental) {
    tags.push({ tagName: "experimental" });
  }

  if (tags.length > 0) {
    doc.tags = tags;
  }

  if (Object.keys(doc).length === 0) {
    return undefined;
  }

  return [doc];
}

/**
 * getDescriptors returns the descriptors for each HTML element.
 */
function getDescriptors(): Descriptor[] {
  const descriptors: Descriptor[] = [];
  for (const tag in bcd.html.elements) {
    const attrs = getAttrs(tag);
    descriptors.push({
      tag,
      functionName: toFunctionName(tag),
      propsInterfaceName: `${toPascalCase(tag)}ElementProps`,
      isVoid: isVoid(tag),
      attrs,
      see: bcd.html.elements[tag].__compat?.mdn_url,
      isDeprecated: bcd.html.elements[tag].__compat?.status?.deprecated,
      isExperimental: bcd.html.elements[tag].__compat?.status
        ?.experimental,
      category: "html",
    });
  }

  for (const tag in bcd.svg.elements) {
    const attrs = getSvgAttrs(tag);
    descriptors.push({
      tag,
      functionName: toFunctionName(tag),
      propsInterfaceName: `${toPascalCase(tag)}ElementProps`,
      isVoid: isVoid(tag),
      attrs,
      see: bcd.svg.elements[tag].__compat?.mdn_url,
      isDeprecated: bcd.svg.elements[tag].__compat?.status?.deprecated,
      isExperimental: bcd.svg.elements[tag].__compat?.status
        ?.experimental,
      category: "svg",
    });
  }

  for (const tag in bcd.mathml.elements) {
    const attrs = getMathmlAttrs(tag);
    descriptors.push({
      tag,
      functionName: toFunctionName(tag),
      propsInterfaceName: `${toPascalCase(tag)}ElementProps`,
      isVoid: isVoid(tag),
      attrs,
      see: bcd.mathml.elements[tag].__compat?.mdn_url,
      isDeprecated: bcd.mathml.elements[tag].__compat?.status?.deprecated,
      isExperimental: bcd.mathml.elements[tag].__compat?.status
        ?.experimental,
      category: "mathml",
    });
  }

  return descriptors;
}

/**
 * generatedFilePreludeString is the comment at the top of generated files.
 */
const generatedFilePreludeString = `/**
* @fileoverview
*
* This file was generated. Do not modify this file directly.
*/`;

type InterfaceProperties = Parameters<
  SourceFile["addInterface"]
>[number]["properties"];

/**
 * Generates all files for the @fartlabs/ht package
 */
async function generateHt() {
  console.log("🔨 Generating @fartlabs/ht package...");

  // Clean up old elements directory
  try {
    await Deno.remove("./packages/ht/src/elements", { recursive: true });
  } catch {
    // Directory may not exist, ignore error
  }

  const project = new Project();

  // Create a file that exports a global attributes interface.
  const globalAttrsFile = project.createSourceFile(
    "./packages/ht/src/global_attributes.ts",
    undefined,
    { overwrite: true },
  );
  globalAttrsFile.addStatements(generatedFilePreludeString);
  const globalAttrsInterface = globalAttrsFile.addInterface({
    isExported: true,
    name: "GlobalAttributes",
    extends: ["DataAttributes"],
    docs: toDocs({
      description:
        "GlobalAttributes are the global attributes for HTML elements.",
      see: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes",
    }),
  });
  globalAttrsFile.addInterface({
    isExported: true,
    name: "DataAttributes",
    docs: toDocs({
      description:
        "DataAttributes are the attributes that start with `data-` for HTML elements.",
      see:
        "https://developer.mozilla.org/docs/Web/HTML/Global_attributes#data-*",
    }),
    properties: [
      { name: "[attr: `data-${string}`]", type: "string | undefined" },
    ],
  });

  // Add HTML global attributes
  for (const attr in bcd.html.global_attributes) {
    if (attr.includes("_")) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.html.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.html.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.html.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  // Add SVG global attributes
  for (const attr in bcd.svg.global_attributes) {
    if (attr.includes("_") || bcd.html.global_attributes[attr]) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.svg.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.svg.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.svg.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  // Add MathML global attributes
  for (const attr in bcd.mathml.global_attributes) {
    if (
      attr.includes("_") || bcd.html.global_attributes[attr] ||
      bcd.svg.global_attributes[attr]
    ) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.mathml.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.mathml.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.mathml.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  // Add event handlers
  for (const elementEventName of bcdElementEventNames) {
    globalAttrsInterface.addProperty({
      name: `on${elementEventName}`,
      hasQuestionToken: true,
      type: `string | undefined`,
      docs: toDocs({
        description:
          `The \`on${elementEventName}\` event handler occurs when the user interacts with the element.`,
        see:
          `https://developer.mozilla.org/docs/Web/Events/${elementEventName}`,
      }),
    });
  }

  // Create a file for each element.
  const descriptors = getDescriptors();
  for (const descriptor of descriptors) {
    addHtElementFile(project, descriptor);
  }

  // Create the html file.
  const htmlFile = project.createSourceFile(
    "./packages/ht/src/html.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "html") {
      htmlFile.addStatements(
        `export * from "./elements/${descriptor.category}/${descriptor.tag}.ts";`,
      );
    }
  }

  // Create the svg file.
  const svgFile = project.createSourceFile(
    "./packages/ht/src/svg.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "svg") {
      svgFile.addStatements(
        `export * from "./elements/${descriptor.category}/${descriptor.tag}.ts";`,
      );
    }
  }

  // Create the mathml file.
  const mathmlFile = project.createSourceFile(
    "./packages/ht/src/mathml.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "mathml") {
      mathmlFile.addStatements(
        `export * from "./elements/${descriptor.category}/${descriptor.tag}.ts";`,
      );
    }
  }

  // Create the mod file.
  const modFile = project.createSourceFile(
    "./packages/ht/src/mod.ts",
    undefined,
    { overwrite: true },
  );
  modFile.addStatements(`export * from "./html.ts";`);

  // Save all the files.
  await project.save();

  // Update the deno.json exports.
  const denoConfig = JSON.parse(
    await Deno.readTextFile("./packages/ht/deno.json"),
  );
  denoConfig.exports = {
    ".": "./src/mod.ts",
    "./html": "./src/html.ts",
    "./svg": "./src/svg.ts",
    "./mathml": "./src/mathml.ts",
    "./render": "./src/render.ts",
    "./global-attributes": "./src/global_attributes.ts",
    ...Object.fromEntries(
      descriptors.map((descriptor) => [
        `./${descriptor.category}/${descriptor.tag}`,
        `./src/elements/${descriptor.category}/${descriptor.tag}.ts`,
      ]),
    ),
  };
  await Deno.writeTextFile(
    "./packages/ht/deno.json",
    JSON.stringify(denoConfig, null, 2),
  );

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "./packages/ht/src"],
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }

  console.log("✅ @fartlabs/ht package generated successfully!");
}

/**
 * Adds a TypeScript file for the given HTML element descriptor (ht package).
 */
function addHtElementFile(
  project: Project,
  descriptor: Descriptor,
): void {
  const sourceFile = project.createSourceFile(
    `./packages/ht/src/elements/${descriptor.category}/${descriptor.tag}.ts`,
    undefined,
    { overwrite: true },
  );

  // Add file prelude.
  sourceFile.addStatements(generatedFilePreludeString);

  // Add the type imports.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: "../../global_attributes.ts",
    namedImports: ["GlobalAttributes"],
  });

  // Add the variable imports.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: "../../render.ts",
    namedImports: ["AnyProps"],
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: "../../render.ts",
    namedImports: ["renderElement"],
  });

  // Add the props interface.
  addHtPropsInterfaces(sourceFile, descriptor);

  // Add the element render function.
  const propsRenderTypeCast = descriptor.tag !== "input"
    ? " as AnyProps"
    : " as unknown as AnyProps";
  sourceFile.addFunction({
    name: descriptor.functionName,
    isExported: true,
    parameters: [
      {
        name: "props",
        type: descriptor.propsInterfaceName,
        hasQuestionToken: true,
      },
      ...(!descriptor.isVoid
        ? [{
          name: "children",
          type: "string[]",
          isRestParameter: true,
        }]
        : []),
    ],
    returnType: "string",
    docs: toDocs({
      description:
        `${descriptor.functionName} renders the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
      isDeprecated: descriptor.isDeprecated,
      isExperimental: descriptor.isExperimental,
      see: descriptor.see,
    }),
    statements: descriptor.isVoid
      ? `return renderElement("${descriptor.tag}", props${propsRenderTypeCast}, true);`
      : `return renderElement("${descriptor.tag}", props${propsRenderTypeCast}, false, children);`,
  });
}

/**
 * Adds the props interfaces to the given source file (ht package).
 */
function addHtPropsInterfaces(
  sourceFile: SourceFile,
  descriptor: Descriptor,
): void {
  const properties: InterfaceProperties = descriptor.attrs.map((attr) => ({
    name: attr.includes("-") ? `'${attr}'` : attr,
    hasQuestionToken: true,
    type: booleanAttributes.has(attr)
      ? "string | boolean | undefined"
      : "string | undefined",
    docs: toDocs({
      see: `${descriptor.see}#${attr}`,
      description:
        `\`${attr}\` is an attribute of the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
      isExperimental: bcd.html.elements[descriptor.tag]?.[attr]?.__compat
        ?.status?.experimental ??
        bcd.svg.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.experimental ??
        bcd.mathml.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.experimental,
      isDeprecated: bcd.html.elements[descriptor.tag]?.[attr]?.__compat
        ?.status?.deprecated ??
        bcd.svg.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.deprecated ??
        bcd.mathml.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.deprecated,
    }),
  }));

  switch (descriptor.tag) {
    case "input": {
      sourceFile.addTypeAlias({
        name: "InputElementType",
        isExported: true,
        type: getInputTypes().map((type) => `"${type}"`).join(" | "),
        docs: toDocs({
          description: "InputElementType is the type of the input element.",
          see: "https://developer.mozilla.org/docs/Web/HTML/Element/input#type",
        }),
      });

      sourceFile.addInterface({
        name: descriptor.propsInterfaceName,
        isExported: true,
        extends: ["GlobalAttributes"],
        properties: [
          ...properties,
          {
            name: "type",
            hasQuestionToken: true,
            type: "InputElementType | undefined",
            docs: toDocs({
              description: "`type` is the type of the input element.",
              see:
                "https://developer.mozilla.org/docs/Web/HTML/Element/input#type",
            }),
          },
          {
            name: "value",
            type: "string | undefined",
            hasQuestionToken: true,
            docs: toDocs({
              description: "`value` is the value of the input element.",
              see:
                "https://developer.mozilla.org/docs/Web/HTML/Element/input#value",
            }),
          },
        ],
        docs: toDocs({
          description:
            `${descriptor.propsInterfaceName} are the base props for the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
          see: descriptor.see,
          isDeprecated: descriptor.isDeprecated,
          isExperimental: descriptor.isExperimental,
        }),
      });
      break;
    }

    default: {
      sourceFile.addInterface({
        name: descriptor.propsInterfaceName,
        isExported: true,
        extends: ["GlobalAttributes"],
        properties,
        docs: toDocs({
          description:
            `${descriptor.propsInterfaceName} are the props for the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
          see: descriptor.see,
          isDeprecated: descriptor.isDeprecated,
          isExperimental: descriptor.isExperimental,
        }),
      });
    }
  }
}

/**
 * Generates all files for the @fartlabs/htx package
 */
async function generateHtx() {
  console.log("🔨 Generating @fartlabs/htx package...");

  // Clean up old elements directory
  try {
    await Deno.remove("./packages/htx/src/elements", { recursive: true });
  } catch {
    // Directory may not exist, ignore error
  }

  const project = new Project();

  // Create a file that exports a global attributes interface.
  const globalAttrsFile = project.createSourceFile(
    "./packages/htx/src/global_attributes.ts",
    undefined,
    { overwrite: true },
  );
  globalAttrsFile.addStatements(generatedFilePreludeString);
  const globalAttrsInterface = globalAttrsFile.addInterface({
    isExported: true,
    name: "GlobalAttributes",
    extends: ["DataAttributes"],
    docs: toDocs({
      description:
        "GlobalAttributes are the global attributes for HTML elements.",
      see: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes",
    }),
    properties: [
      {
        name: "children",
        type: "string | string[] | undefined",
        hasQuestionToken: true,
        docs: toDocs({
          description: "The children of the element.",
        }),
      },
    ],
  });
  globalAttrsFile.addInterface({
    isExported: true,
    name: "DataAttributes",
    docs: toDocs({
      description:
        "DataAttributes are the attributes that start with `data-` for HTML elements.",
      see:
        "https://developer.mozilla.org/docs/Web/HTML/Global_attributes#data-*",
    }),
    properties: [
      { name: "[attr: `data-${string}`]", type: "string | undefined" },
    ],
  });

  // Add HTML global attributes
  for (const attr in bcd.html.global_attributes) {
    if (attr.includes("_")) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.html.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.html.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.html.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  // Add SVG global attributes
  for (const attr in bcd.svg.global_attributes) {
    if (attr.includes("_") || bcd.html.global_attributes[attr]) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.svg.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.svg.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.svg.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  // Add MathML global attributes
  for (const attr in bcd.mathml.global_attributes) {
    if (
      attr.includes("_") || bcd.html.global_attributes[attr] ||
      bcd.svg.global_attributes[attr]
    ) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.mathml.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.mathml.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.mathml.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  // Add event handlers
  for (const elementEventName of bcdElementEventNames) {
    globalAttrsInterface.addProperty({
      name: `on${elementEventName}`,
      hasQuestionToken: true,
      type: `string | undefined`,
      docs: toDocs({
        description:
          `The \`on${elementEventName}\` event handler occurs when the user interacts with the element.`,
        see:
          `https://developer.mozilla.org/docs/Web/Events/${elementEventName}`,
      }),
    });
  }

  // Create a file for each element.
  const descriptors = getDescriptors();
  for (const descriptor of descriptors) {
    addHtxElementFile(project, {
      ...descriptor,
      functionName: toConstantCase(descriptor.tag),
    });
  }

  // Create the html file.
  const htmlFile = project.createSourceFile(
    "./packages/htx/src/html.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "html") {
      htmlFile.addStatements(
        `export * from "./elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts";`,
      );
    }
  }

  // Create the svg file.
  const svgFile = project.createSourceFile(
    "./packages/htx/src/svg.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "svg") {
      svgFile.addStatements(
        `export * from "./elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts";`,
      );
    }
  }

  // Create the mathml file.
  const mathmlFile = project.createSourceFile(
    "./packages/htx/src/mathml.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "mathml") {
      mathmlFile.addStatements(
        `export * from "./elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts";`,
      );
    }
  }

  // Create the mod file.
  const modFile = project.createSourceFile(
    "./packages/htx/src/mod.ts",
    undefined,
    { overwrite: true },
  );
  modFile.addStatements(`export * from "./html.ts";`);

  // Save all the files.
  await project.save();

  // Update the deno.json exports.
  const denoConfig = JSON.parse(
    await Deno.readTextFile("./packages/htx/deno.json"),
  );
  denoConfig.exports = {
    ".": "./src/mod.ts",
    "./html": "./src/html.ts",
    "./svg": "./src/svg.ts",
    "./mathml": "./src/mathml.ts",
    "./render": "./src/render.ts",
    "./global-attributes": "./src/global_attributes.ts",
    ...Object.fromEntries(
      descriptors.map((descriptor) => [
        `./${descriptor.category}/${toKebabCase(descriptor.tag)}`,
        `./src/elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts`,
      ]),
    ),
  };
  await Deno.writeTextFile(
    "./packages/htx/deno.json",
    JSON.stringify(denoConfig, null, 2),
  );

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "./packages/htx/src"],
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }

  console.log("✅ @fartlabs/htx package generated successfully!");
}

/**
 * Adds a TypeScript file for the given HTML element descriptor (htx package).
 */
function addHtxElementFile(
  project: Project,
  descriptor: Descriptor,
): void {
  const sourceFile = project.createSourceFile(
    `./packages/htx/src/elements/${descriptor.category}/${
      toSnakeCase(descriptor.tag)
    }.ts`,
    undefined,
    { overwrite: true },
  );

  // Add file prelude.
  sourceFile.addStatements(generatedFilePreludeString);

  // Add the type imports for the props.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: `@fartlabs/ht/${descriptor.category}/${descriptor.tag}`,
    namedImports: [descriptor.propsInterfaceName],
  });

  // Add the variable imports.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: "../../render.ts",
    namedImports: ["AnyProps"],
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: "../../render.ts",
    namedImports: ["renderElement"],
  });

  sourceFile.addStatements(`export type { ${descriptor.propsInterfaceName} };`);

  // Add the element render function.
  const propsRenderTypeCast = descriptor.tag !== "input"
    ? " as AnyProps"
    : " as unknown as AnyProps";
  sourceFile.addFunction({
    name: descriptor.functionName,
    isExported: true,
    parameters: [
      {
        name: "props",
        type:
          `${descriptor.propsInterfaceName} & { children?: string | string[] | undefined }`,
        hasQuestionToken: true,
      },
      ...(!descriptor.isVoid
        ? [{
          name: "children",
          type: "string[]",
          isRestParameter: true,
        }]
        : []),
    ],
    returnType: "string",
    docs: toDocs({
      description:
        `${descriptor.functionName} renders the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
      isDeprecated: descriptor.isDeprecated,
      isExperimental: descriptor.isExperimental,
      see: descriptor.see,
    }),
    statements: descriptor.isVoid
      ? `const { children: _propsChildren, ...rest } = props ?? {};
        return renderElement("${descriptor.tag}", rest${propsRenderTypeCast}, true);`
      : `const { children: propsChildren, ...rest } = props ?? {};
        const childrenArray = Array.isArray(propsChildren) ? propsChildren : (propsChildren ? [propsChildren] : []);
        return renderElement(
          "${descriptor.tag}",
          rest${propsRenderTypeCast},
          false,
          [...childrenArray, ...children],
        );`,
  });
}

// Main execution
if (import.meta.main) {
  console.log("🚀 Starting code generation for ht and htx packages...\n");

  try {
    await generateHt();
    console.log();
    await generateHtx();
    console.log("\n✨ All packages generated successfully!");
  } catch (error) {
    console.error("❌ Error during generation:", error);
    Deno.exit(1);
  }
}
