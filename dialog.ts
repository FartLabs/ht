import { renderElement } from "./shared/mod.ts";

/**
 * dialog renders a dialog element.
 */
export function dialog(props: Record<PropertyKey, unknown>): string {
  return renderElement("dialog", props);
}
