import { Project } from "ts_morph";
import bcd from "@mdn/browser-compat-data" with { type: "json" };

if (import.meta.main) {
  // Create a project.
  const project = new Project();

  // Create a file for each element.
  for (const tag in bcd.html.elements) {
    const sourceFile = project.createSourceFile(
      `${tag}.ts`,
      undefined,
      { overwrite: true },
    );

    // Add the renderElement function import.
    sourceFile.addImportDeclaration({
      moduleSpecifier: "./shared/mod.ts",
      namedImports: ["renderElement"],
    });

    // Add an interface for the props.
    const propsName = `${capitalize(tag)}Props`;
    const url = bcd.html.elements[tag].__compat?.mdn_url;
    const propsInterface = sourceFile.addInterface({
      // TODO: Do not define interface if no attributes are present.
      name: propsName,
      isExported: true,
      // TODO: Generate ElementProps in shared module.
      // extends: "ElementProps",
      docs: [{
        description:
          `${propsName} are the props for the [\`${tag}\`](${url}) element.`,
        tags: [
          // TODO: Deprecation message.
          ...(url ? [{ tagName: "see", text: url }] : []),
        ],
      }],
    });
    // TODO: Add children property to ElementProps or leave for jsonx implementation.
    propsInterface.addProperty({
      name: "children",
      type: "unknown[] | undefined",
    });
    for (const attr in bcd.html.elements[tag]) {
      if (attr === "__compat") {
        continue;
      }

      const isDeprecated = bcd.html.elements[tag][attr].__compat?.status
        ?.deprecated;
      propsInterface.addProperty({
        name: attr.includes("-") ? `'${attr}'` : attr,
        type: "string | undefined",
        docs: isDeprecated
          ? [{ tags: [{ tagName: "deprecated" }] }]
          : undefined,
      });
    }

    // Add the element function.
    const fnName = toFunctionName(tag);
    sourceFile.addFunction({
      name: fnName,
      isExported: true,
      parameters: [{ name: "props", type: propsName }],
      returnType: "string",
      // TODO: Account for [void elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element).
      statements: `return renderElement("${tag}", props);`,
      docs: [{
        description: `${fnName} renders the [\`${tag}\`](${url}) element.`,
      }],
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
