import { renderElement } from "./shared/mod.ts";

/**
 * s renders a s element.
 */
export function s(props: Record<PropertyKey, unknown>): string {
  return renderElement("s", props);
}
