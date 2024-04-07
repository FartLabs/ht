/**
 * @fileoverview
 *
 * This script generates TypeScript files for each HTML element based on the
 * data from the Browser Compatibility Data (BCD) project. It also generates a
 * file that exports a global attributes interface and a mod file that exports
 * all the element files.
 * .
 * ├── ./lib/
 * │   └── ./lib/global_attributes.ts
 * ├── ./a.ts
 * ├── ./abbr.ts
 * ├── ./acronym.ts
 * ├── (...) - A TypeScript file for each HTML element.
 * └── ./mod.ts
 */

import { Project } from "ts-morph";
import bcd from "@mdn/browser-compat-data" with { type: "json" };

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
    "./lib/global_attributes.ts",
    undefined,
    { overwrite: true },
  );
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
      name: attr,
      hasQuestionToken: true,
      type: "string | undefined",
      docs: toDocs({
        see: bcd.html.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.html.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.html.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  // Create a file for each element.
  const descriptors = getDescriptors();
  for (const descriptor of descriptors) {
    const sourceFile = project.createSourceFile(
      `${descriptor.tag}.ts`,
      undefined,
      { overwrite: true },
    );

    // Add the type imports.
    sourceFile.addImportDeclaration({
      isTypeOnly: true,
      moduleSpecifier: "./lib/mod.ts",
      namedImports: ["AnyProps", "GlobalAttributes"],
    });

    // Add the variable imports.
    sourceFile.addImportDeclaration({
      moduleSpecifier: "./lib/mod.ts",
      namedImports: ["renderElement"],
    });

    // Add an interface for the props.
    type InterfaceProperties = Parameters<
      typeof sourceFile.addInterface
    >[0]["properties"];
    const properties: InterfaceProperties = descriptor.attrs.map((attr) => ({
      name: attr.includes("-") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: "string | undefined",
      docs: toDocs({
        description:
          `\`${attr}\` is an attribute of the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
        isExperimental: bcd.html.elements[descriptor.tag][attr].__compat
          ?.status?.experimental,
        isDeprecated: bcd.html.elements[descriptor.tag][attr].__compat
          ?.status?.deprecated,
      }),
    }));
    if (descriptor.tag === "input") {
      properties.unshift({
        name: "type",
        hasQuestionToken: true,
        type: getInputTypes().map((type) => `'${type}'`).join(" | "),
      });
    }

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

    // Add the element render function.
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
        ? `return renderElement("${descriptor.tag}", props as AnyProps, true);`
        : `return renderElement("${descriptor.tag}", props as AnyProps, false, children);`,
    });
  }

  // Create the mod file.
  const modFile = project.createSourceFile(
    "mod.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    modFile.addStatements(`export * from "./${descriptor.tag}.ts";`);
  }

  // Save all the files.
  await project.save();

  // Update the deno.json exports.
  const denoConfig = JSON.parse(await Deno.readTextFile("./deno.json"));
  denoConfig.exports = {
    "./cli/codegen.ts": "./cli/codegen.ts",
    "./lib/global_attributes.ts": "./lib/global_attributes.ts",
    "./lib/render.ts": "./lib/render.ts",
    ".": "./mod.ts",
    ...Object.fromEntries(descriptors.map((descriptor) => [
      `./${descriptor.tag}`,
      `./${descriptor.tag}.ts`,
    ])),
  };
  await Deno.writeTextFile("./deno.json", JSON.stringify(denoConfig, null, 2));

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "./", "./lib/global_attributes.ts"],
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }
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
 * getDescriptors returns the descriptors for each HTML element.
 */
export function getDescriptors(): Descriptor[] {
  const descriptors: Descriptor[] = [];
  for (const tag in bcd.html.elements) {
    const attrs = getAttrs(tag);
    descriptors.push({
      tag,
      functionName: toFunctionName(tag),
      propsInterfaceName: `${capitalize(tag)}ElementProps`,
      isVoid: isVoid(tag),
      attrs,
      see: bcd.html.elements[tag].__compat?.mdn_url,
      isDeprecated: bcd.html.elements[tag].__compat?.status?.deprecated,
      isExperimental: bcd.html.elements[tag].__compat?.status?.experimental,
    });
  }

  return descriptors;
}

/**
 * getAttrs returns the attributes for the given HTML element tag.
 */
export function getAttrs(tag: string): string[] {
  return Object.keys(bcd.html.elements[tag])
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
 * capitalize capitalizes the first letter of the given string.
 */
export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * toFunctionName converts the given string to a valid function name.
 */
export function toFunctionName(s: string): string {
  // Handle special cases to avoid conflicts.
  if (s === "var") {
    return "var_";
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
