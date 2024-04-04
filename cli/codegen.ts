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

import { Project } from "ts_morph";
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
];

const voidElementSet = new Set(voidElements);

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
    docs: [{
      description:
        "GlobalAttributes are the global attributes for HTML elements.",
      tags: [
        {
          tagName: "see",
          text: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes",
        },
      ],
    }],
  });
  globalAttrsFile.addInterface({
    isExported: true,
    name: "DataAttributes",
    docs: [{
      description:
        "DataAttributes are the attributes that start with `data-` for HTML elements.",
      tags: [
        {
          tagName: "see",
          text:
            "<https://developer.mozilla.org/docs/Web/HTML/Global_attributes#data-*>",
        },
      ],
    }],
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
  for (const tag in bcd.html.elements) {
    const sourceFile = project.createSourceFile(
      `${tag}.ts`,
      undefined,
      { overwrite: true },
    );

    // Add the type imports.
    sourceFile.addImportDeclaration({
      isTypeOnly: true,
      moduleSpecifier: "./lib/mod.ts",
      namedImports: ["ChildrenProps", "GlobalAttributes"],
    });

    // Add the variable imports.
    sourceFile.addImportDeclaration({
      moduleSpecifier: "./lib/mod.ts",
      namedImports: ["renderElement"],
    });

    // Add an interface for the props.
    const propsName = `${capitalize(tag)}Props`;
    const url = bcd.html.elements[tag].__compat?.mdn_url;
    const propsInterface = sourceFile.addInterface({
      name: propsName,
      isExported: true,
      extends: ["GlobalAttributes"],
      docs: toDocs({
        description:
          `${propsName} are the props for the [\`${tag}\`](${url}) element.`,
        see: url,
        isDeprecated: bcd.html.elements[tag].__compat?.status?.deprecated,
      }),
    });
    for (const attr in bcd.html.elements[tag]) {
      if (attr.includes("_")) {
        // TODO: Handle special cases e.g. input elements.
        continue;
      }

      const isDeprecated = bcd.html.elements[tag][attr].__compat?.status
        ?.deprecated;
      propsInterface.addProperty({
        name: attr.includes("-") ? `'${attr}'` : attr,
        hasQuestionToken: true,
        type: "string | undefined",
        docs: toDocs({ isDeprecated }),
      });
    }
    let isGlobalAttrs = false;
    if (propsInterface.getProperties().length === 0) {
      isGlobalAttrs = true;
      propsInterface.remove();
    }

    // Add the element render function.
    const fnName = toFunctionName(tag);
    sourceFile.addFunction({
      name: fnName,
      isExported: true,
      parameters: [{
        name: "props",
        type: `${
          isGlobalAttrs ? "GlobalAttributes" : propsName
        } & ChildrenProps`,
        hasQuestionToken: true,
      }],
      returnType: "string",
      statements: `return renderElement("${tag}", props${
        isVoid(tag) ? ", true" : ""
      });`,
      docs: toDocs({
        description: `${fnName} renders the [\`${tag}\`](${url}) element.`,
        isDeprecated: bcd.html.elements[tag].__compat?.status?.deprecated,
        isExperimental: bcd.html.elements[tag].__compat?.status?.experimental,
        see: url,
      }),
    });
  }

  // Create the mod file.
  const modFile = project.createSourceFile(
    "mod.ts",
    undefined,
    { overwrite: true },
  );
  for (const tag in bcd.html.elements) {
    modFile.addStatements(`export * from "./${tag}.ts";`);
  }

  // Save all the files.
  await project.save();

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "./", "./lib/global_attributes.ts"],
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toFunctionName(s: string): string {
  // Handle special cases to avoid conflicts.
  if (s === "var") {
    return "var_";
  }

  return s;
}

function toDocs(data: {
  description?: string;
  see?: string;
  isDeprecated?: boolean;
  isExperimental?: boolean;
}) {
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
