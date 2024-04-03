import { renderElement } from "./shared/mod.ts";

/**
 * input renders a input element.
 */
export function input(props: Record<PropertyKey, unknown>): string {
  return renderElement("input", props);
}
