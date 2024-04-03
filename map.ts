import { renderElement } from "./shared/mod.ts";

/**
 * map renders a map element.
 */
export function map(props: Record<PropertyKey, unknown>): string {
  return renderElement("map", props);
}
