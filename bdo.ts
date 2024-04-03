import { renderElement } from "./shared/mod.ts";

/**
 * bdo renders a bdo element.
 */
export function bdo(props: Record<PropertyKey, unknown>): string {
  return renderElement("bdo", props);
}
