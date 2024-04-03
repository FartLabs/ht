import { renderElement } from "./shared/mod.ts";

/**
 * h2 renders a h2 element.
 */
export function h2(props: Record<PropertyKey, unknown>): string {
  return renderElement("h2", props);
}
