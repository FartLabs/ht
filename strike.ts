import { renderElement } from "./shared/mod.ts";

/**
 * strike renders a strike element.
 */
export function strike(props: Record<PropertyKey, unknown>): string {
  return renderElement("strike", props);
}
