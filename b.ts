import { renderElement } from "./shared/mod.ts";

/**
 * b renders a b element.
 */
export function b(props: Record<PropertyKey, unknown>): string {
  return renderElement("b", props);
}
