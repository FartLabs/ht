import { renderElement } from "./shared/mod.ts";

/**
 * tr renders a tr element.
 */
export function tr(props: Record<PropertyKey, unknown>): string {
  return renderElement("tr", props);
}
