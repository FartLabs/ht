import { renderElement } from "./shared/mod.ts";

/**
 * source renders a source element.
 */
export function source(props: Record<PropertyKey, unknown>): string {
  return renderElement("source", props);
}
