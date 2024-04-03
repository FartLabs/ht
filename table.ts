import { renderElement } from "./shared/mod.ts";

/**
 * table renders a table element.
 */
export function table(props: Record<PropertyKey, unknown>): string {
  return renderElement("table", props);
}
