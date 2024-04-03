import { renderElement } from "./shared/mod.ts";

/**
 * header renders a header element.
 */
export function header(props: Record<PropertyKey, unknown>): string {
  return renderElement("header", props);
}
