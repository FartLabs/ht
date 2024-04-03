import { renderElement } from "./shared/mod.ts";

/**
 * q renders a q element.
 */
export function q(props: Record<PropertyKey, unknown>): string {
  return renderElement("q", props);
}
