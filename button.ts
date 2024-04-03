import { renderElement } from "./shared/mod.ts";

/**
 * button renders a button element.
 */
export function button(props: Record<PropertyKey, unknown>): string {
  return renderElement("button", props);
}
