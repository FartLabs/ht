import { renderElement } from "./shared/mod.ts";

/**
 * section renders a section element.
 */
export function section(props: Record<PropertyKey, unknown>): string {
  return renderElement("section", props);
}
