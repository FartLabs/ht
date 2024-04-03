import { renderElement } from "./shared/mod.ts";

/**
 * area renders a area element.
 */
export function area(props: Record<PropertyKey, unknown>): string {
  return renderElement("area", props);
}
