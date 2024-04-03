import { renderElement } from "./shared/mod.ts";

/**
 * abbr renders a abbr element.
 */
export function abbr(props: Record<PropertyKey, unknown>): string {
  return renderElement("abbr", props);
}
