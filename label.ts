import { renderElement } from "./shared/mod.ts";

/**
 * label renders a label element.
 */
export function label(props: Record<PropertyKey, unknown>): string {
  return renderElement("label", props);
}
