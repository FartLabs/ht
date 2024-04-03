import { renderElement } from "./shared/mod.ts";

/**
 * form renders a form element.
 */
export function form(props: Record<PropertyKey, unknown>): string {
  return renderElement("form", props);
}
