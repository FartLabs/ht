import { renderElement } from "./shared/mod.ts";

/**
 * cite renders a cite element.
 */
export function cite(props: Record<PropertyKey, unknown>): string {
  return renderElement("cite", props);
}
