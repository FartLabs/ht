import { renderElement } from "./shared/mod.ts";

/**
 * html renders a html element.
 */
export function html(props: Record<PropertyKey, unknown>): string {
  return renderElement("html", props);
}
