import { renderElement } from "./shared/mod.ts";

/**
 * textarea renders a textarea element.
 */
export function textarea(props: Record<PropertyKey, unknown>): string {
  return renderElement("textarea", props);
}
