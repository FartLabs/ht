import { renderElement } from "./shared/mod.ts";

/**
 * mark renders a mark element.
 */
export function mark(props: Record<PropertyKey, unknown>): string {
  return renderElement("mark", props);
}
