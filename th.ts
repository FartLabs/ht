import { renderElement } from "./shared/mod.ts";

/**
 * th renders a th element.
 */
export function th(props: Record<PropertyKey, unknown>): string {
  return renderElement("th", props);
}
