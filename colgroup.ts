import { renderElement } from "./shared/mod.ts";

/**
 * colgroup renders a colgroup element.
 */
export function colgroup(props: Record<PropertyKey, unknown>): string {
  return renderElement("colgroup", props);
}
