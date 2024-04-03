import { renderElement } from "./shared/mod.ts";

/**
 * rp renders a rp element.
 */
export function rp(props: Record<PropertyKey, unknown>): string {
  return renderElement("rp", props);
}
