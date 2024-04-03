import { renderElement } from "./shared/mod.ts";

/**
 * nav renders a nav element.
 */
export function nav(props: Record<PropertyKey, unknown>): string {
  return renderElement("nav", props);
}
