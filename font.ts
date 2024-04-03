import { renderElement } from "./shared/mod.ts";

/**
 * font renders a font element.
 */
export function font(props: Record<PropertyKey, unknown>): string {
  return renderElement("font", props);
}
