import { renderElement } from "./shared/mod.ts";

/**
 * data renders a data element.
 */
export function data(props: Record<PropertyKey, unknown>): string {
  return renderElement("data", props);
}
