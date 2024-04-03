import { renderElement } from "./shared/mod.ts";

/**
 * h6 renders a h6 element.
 */
export function h6(props: Record<PropertyKey, unknown>): string {
  return renderElement("h6", props);
}
