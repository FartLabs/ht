import { renderElement } from "./shared/mod.ts";

/**
 * object renders a object element.
 */
export function object(props: Record<PropertyKey, unknown>): string {
  return renderElement("object", props);
}
