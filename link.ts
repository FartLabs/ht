import { renderElement } from "./shared/mod.ts";

/**
 * link renders a link element.
 */
export function link(props: Record<PropertyKey, unknown>): string {
  return renderElement("link", props);
}
