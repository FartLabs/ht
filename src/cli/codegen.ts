/**
 * @fileoverview
 *
 * This script generates TypeScript files for each HTML element based on the
 * data from the Browser Compatibility Data (BCD) project. It also generates a
 * file that exports a global attributes interface and a mod file that exports
 * all the element files.
 */

import { toCamelCase } from "@std/text/to-camel-case";
import { toPascalCase } from "@std/text/to-pascal-case";
import type { SourceFile } from "ts-morph";
import { Project } from "ts-morph";
import bcd from "@mdn/browser-compat-data" with { type: "json" };

/**
 * bcdElementEventNames is a list of all element event names in BCD.
 */
export const bcdElementEventNames: string[] = Object.keys(bcd.api.Element)
  .filter((key) => key.endsWith("_event"))
  .map((key) => key.toLowerCase().replace(/_event$/, ""))
  .toSorted();

/**
 * voidElements is a list of all void elements in HTML.
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
 */
export const voidElements = [
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
export const booleanAttributes: Set<string> = new Set([
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
 * generatedFilePreludeString is the comment at the top of generated files.
 */
const generatedFilePreludeString = `/**
* @fileoverview
*
* This file was generated. Do not modify this file directly.
*/`;

/**
 * isVoid returns true if the given tag is a void element.
 */
export function isVoid(tag: string): boolean {
  return voidElementSet.has(tag);
}

if (import.meta.main) {
  // Create a project.
  const project = new Project();

  // Create a file that exports a global attributes interface.
  const globalAttrsFile = project.createSourceFile(
    "./src/global_attributes.ts",
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
    addElementFile(project, descriptor);
  }

  // Create the mod file.
  const modFile = project.createSourceFile(
    "./src/mod.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    modFile.addStatements(
      `export * from "./elements/${descriptor.tag}.ts";`,
    );
  }

  // Save all the files.
  await project.save();

  // Update the deno.json exports.
  const denoConfig = JSON.parse(await Deno.readTextFile("./deno.json"));
  denoConfig.exports = {
    ".": "./src/mod.ts",
    "./codegen": "./src/cli/codegen.ts",
    "./render": "./src/render.ts",
    "./global-attributes": "./src/global_attributes.ts",
    ...Object.fromEntries(
      descriptors.map((descriptor) => [
        `./elements/${descriptor.tag}`,
        `./src/elements/${descriptor.tag}.ts`,
      ]),
    ),
  };
  await Deno.writeTextFile("./deno.json", JSON.stringify(denoConfig, null, 2));

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "./src"],
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }
}

/**
 * addElementFile adds a TypeScript file for the given HTML element descriptor.
 */
export function addElementFile(
  project: Project,
  descriptor: Descriptor,
): void {
  const sourceFile = project.createSourceFile(
    `./src/elements/${descriptor.tag}.ts`,
    undefined,
    { overwrite: true },
  );

  // Add file prelude.
  sourceFile.addStatements(generatedFilePreludeString);

  // Add the type imports.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: "../global_attributes.ts",
    namedImports: ["GlobalAttributes"],
  });

  // Add the variable imports.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: "../render.ts",
    namedImports: ["AnyProps"],
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: "../render.ts",
    namedImports: ["renderElement"],
  });

  // Add the props interface.
  addPropsInterfaces(sourceFile, descriptor);

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
 * addPropsInterfaces adds the interfaces to the given source file.
 */
export function addPropsInterfaces(
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

type InterfaceProperties = Parameters<
  SourceFile["addInterface"]
>[number]["properties"];

/**
 * getDescriptors returns the descriptors for each HTML element.
 */
export function getDescriptors(): Descriptor[] {
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
      isExperimental: bcd.html.elements[tag].__compat?.status?.experimental,
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
      isExperimental: bcd.svg.elements[tag].__compat?.status?.experimental,
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
      isExperimental: bcd.mathml.elements[tag].__compat?.status?.experimental,
    });
  }

  return descriptors;
}

/**
 * Descriptor represents the data for an HTML element.
 *
 * From this data, we can generate a TypeScript file for each element.
 */
export interface Descriptor {
  tag: string;
  functionName: string;
  propsInterfaceName: string;
  isVoid: boolean;
  attrs: string[];
  description?: string;
  see?: string;
  isDeprecated?: boolean;
  isExperimental?: boolean;
}

/**
 * getAttrs returns the attributes for the given HTML element tag.
 */
export function getAttrs(tag: string): string[] {
  return Object.keys(bcd.html.elements[tag])
    .filter((attr) => !attr.includes("_"));
}

/**
 * getSvgAttrs returns the attributes for the given SVG element tag.
 */
export function getSvgAttrs(tag: string): string[] {
  return Object.keys(bcd.svg.elements[tag])
    .filter((attr) => !attr.includes("_"));
}

/**
 * getMathmlAttrs returns the attributes for the given MathML element tag.
 */
export function getMathmlAttrs(tag: string): string[] {
  return Object.keys(bcd.mathml.elements[tag])
    .filter((attr) => !attr.includes("_"));
}

/**
 * getInputTypes returns the types of input elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 */
export function getInputTypes(): string[] {
  const re = /^type_/;
  return Object.keys(bcd.html.elements.input)
    .filter((attr) => re.test(attr))
    .map((attr) => attr.replace(re, ""));
}

/**
 * toFunctionName converts the given string to a valid function name.
 */
export function toFunctionName(s: string): string {
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
export function toDocs(data: {
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
