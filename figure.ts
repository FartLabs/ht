import { renderElement } from "./shared/mod.ts";

/**
 * figure renders a figure element.
 */
export function figure(props: Record<PropertyKey, unknown>): string {
  return renderElement("figure", props);
}
