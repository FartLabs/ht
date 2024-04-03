import { renderElement } from "./shared/mod.ts";

/**
 * optgroup renders a optgroup element.
 */
export function optgroup(props: Record<PropertyKey, unknown>): string {
  return renderElement("optgroup", props);
}
