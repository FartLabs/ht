import { renderElement } from "./shared/mod.ts";

/**
 * blockquote renders a blockquote element.
 */
export function blockquote(props: Record<PropertyKey, unknown>): string {
  return renderElement("blockquote", props);
}
