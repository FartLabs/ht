import { renderElement } from "./shared/mod.ts";

/**
 * h3 renders a h3 element.
 */
export function h3(props: Record<PropertyKey, unknown>): string {
  return renderElement("h3", props);
}
