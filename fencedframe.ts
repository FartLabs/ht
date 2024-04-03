import { renderElement } from "./shared/mod.ts";

/**
 * fencedframe renders a fencedframe element.
 */
export function fencedframe(props: Record<PropertyKey, unknown>): string {
  return renderElement("fencedframe", props);
}
