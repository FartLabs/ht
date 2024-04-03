import { renderElement } from "./shared/mod.ts";

/**
 * marquee renders a marquee element.
 */
export function marquee(props: Record<PropertyKey, unknown>): string {
  return renderElement("marquee", props);
}
