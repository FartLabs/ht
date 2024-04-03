import { renderElement } from "./shared/mod.ts";

/**
 * figcaption renders a figcaption element.
 */
export function figcaption(props: Record<PropertyKey, unknown>): string {
  return renderElement("figcaption", props);
}
