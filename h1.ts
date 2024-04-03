import { renderElement } from "./shared/mod.ts";

/**
 * h1 renders a h1 element.
 */
export function h1(props: Record<PropertyKey, unknown>): string {
  return renderElement("h1", props);
}
