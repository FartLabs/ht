import { renderElement } from "./shared/mod.ts";

/**
 * span renders a span element.
 */
export function span(props: Record<PropertyKey, unknown>): string {
  return renderElement("span", props);
}
