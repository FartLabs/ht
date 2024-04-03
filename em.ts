import { renderElement } from "./shared/mod.ts";

/**
 * em renders a em element.
 */
export function em(props: Record<PropertyKey, unknown>): string {
  return renderElement("em", props);
}
