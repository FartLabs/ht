import { renderElement } from "./shared/mod.ts";

/**
 * h4 renders a h4 element.
 */
export function h4(props: Record<PropertyKey, unknown>): string {
  return renderElement("h4", props);
}
