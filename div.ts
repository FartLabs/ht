import { renderElement } from "./shared/mod.ts";

/**
 * div renders a div element.
 */
export function div(props: Record<PropertyKey, unknown>): string {
  return renderElement("div", props);
}
