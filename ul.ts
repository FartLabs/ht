import { renderElement } from "./shared/mod.ts";

/**
 * ul renders a ul element.
 */
export function ul(props: Record<PropertyKey, unknown>): string {
  return renderElement("ul", props);
}
