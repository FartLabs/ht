import { renderElement } from "./shared/mod.ts";

/**
 * details renders a details element.
 */
export function details(props: Record<PropertyKey, unknown>): string {
  return renderElement("details", props);
}
