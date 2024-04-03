import { renderElement } from "./shared/mod.ts";

/**
 * title renders a title element.
 */
export function title(props: Record<PropertyKey, unknown>): string {
  return renderElement("title", props);
}
