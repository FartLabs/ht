import { renderElement } from "./shared/mod.ts";

/**
 * body renders a body element.
 */
export function body(props: Record<PropertyKey, unknown>): string {
  return renderElement("body", props);
}
