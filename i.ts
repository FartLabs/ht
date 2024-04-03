import { renderElement } from "./shared/mod.ts";

/**
 * i renders a i element.
 */
export function i(props: Record<PropertyKey, unknown>): string {
  return renderElement("i", props);
}
