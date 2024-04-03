import { renderElement } from "./shared/mod.ts";

/**
 * slot renders a slot element.
 */
export function slot(props: Record<PropertyKey, unknown>): string {
  return renderElement("slot", props);
}
