import { Project } from "ts_morph";
import bcd from "@mdn/browser-compat-data" with { type: "json" };

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
  for (const attr in bcd.html.global_attributes) {
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
      // TODO: Do not define interface if no attributes are present.
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
      if (attr === "__compat") {
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

    // Add the element function.
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
      // TODO: Account for [void elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element).
      statements: `return renderElement("${tag}", props);`,
      docs: toDocs({
        description: `${fnName} renders the [\`${tag}\`](${url}) element.`,
        isDeprecated: bcd.html.elements[tag].__compat?.status?.deprecated,
        isExperimental: bcd.html.elements[tag].__compat?.status?.experimental,
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
    modFile.addStatements(`export * from "./${tag}";`);
  }

  // Save all the files.
  await project.save();

  // TODO: Run `deno fmt` on the generated files.
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
    tags.push({ tagName: "see", text: data.see });
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
