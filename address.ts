import { renderElement } from "./shared/mod.ts";

/**
 * address renders a address element.
 */
export function address(props: Record<PropertyKey, unknown>): string {
  return renderElement("address", props);
}
