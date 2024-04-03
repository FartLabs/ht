import { renderElement } from "./shared/mod.ts";

/**
 * a renders a a element.
 */
export function a(props: Record<PropertyKey, unknown>): string {
  return renderElement("a", props);
}
