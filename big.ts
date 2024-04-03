import { renderElement } from "./shared/mod.ts";

/**
 * big renders a big element.
 */
export function big(props: Record<PropertyKey, unknown>): string {
  return renderElement("big", props);
}
