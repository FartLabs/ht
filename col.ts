import { renderElement } from "./shared/mod.ts";

/**
 * col renders a col element.
 */
export function col(props: Record<PropertyKey, unknown>): string {
  return renderElement("col", props);
}
