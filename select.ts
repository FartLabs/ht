import { renderElement } from "./shared/mod.ts";

/**
 * select renders a select element.
 */
export function select(props: Record<PropertyKey, unknown>): string {
  return renderElement("select", props);
}
