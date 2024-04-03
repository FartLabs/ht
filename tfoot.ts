import { renderElement } from "./shared/mod.ts";

/**
 * tfoot renders a tfoot element.
 */
export function tfoot(props: Record<PropertyKey, unknown>): string {
  return renderElement("tfoot", props);
}
