import { renderElement } from "./shared/mod.ts";

/**
 * menu renders a menu element.
 */
export function menu(props: Record<PropertyKey, unknown>): string {
  return renderElement("menu", props);
}
