import { renderElement } from "./shared/mod.ts";

/**
 * li renders a li element.
 */
export function li(props: Record<PropertyKey, unknown>): string {
  return renderElement("li", props);
}
