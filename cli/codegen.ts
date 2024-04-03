import bcd from "@mdn/browser-compat-data" with { type: "json" };
import { Project } from "ts_morph";

if (import.meta.main) {
  const project = new Project();
  const mod = Object.keys(bcd.html.elements).reduce(
    (acc, tag) => {
      project.createSourceFile(
        `${tag}.ts`,
        generateCode(tag),
        { overwrite: true },
      );

      return `${acc}export * from "./${tag}.ts";\n`;
    },
    "",
  );
  project.createSourceFile(
    "mod.ts",
    mod,
    { overwrite: true },
  );

  await project.save();
}

function generateCode(tag: string): string {
  return `import { renderElement } from "./shared/mod.ts";

/**
 * ${tag} renders a ${tag} element.
 */
export function ${tag}(props: Record<PropertyKey, unknown>): string {
  return renderElement("${tag}", props);
}
`;
}
