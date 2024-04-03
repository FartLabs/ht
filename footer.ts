import { renderElement } from "./shared/mod.ts";

/**
 * footer renders a footer element.
 */
export function footer(props: Record<PropertyKey, unknown>): string {
  return renderElement("footer", props);
}
