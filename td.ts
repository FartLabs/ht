import { renderElement } from "./shared/mod.ts";

/**
 * td renders a td element.
 */
export function td(props: Record<PropertyKey, unknown>): string {
  return renderElement("td", props);
}
