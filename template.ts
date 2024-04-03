import { renderElement } from "./shared/mod.ts";

/**
 * template renders a template element.
 */
export function template(props: Record<PropertyKey, unknown>): string {
  return renderElement("template", props);
}
