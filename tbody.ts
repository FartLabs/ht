import { renderElement } from "./shared/mod.ts";

/**
 * tbody renders a tbody element.
 */
export function tbody(props: Record<PropertyKey, unknown>): string {
  return renderElement("tbody", props);
}
