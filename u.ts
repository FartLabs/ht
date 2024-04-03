import { renderElement } from "./shared/mod.ts";

/**
 * u renders a u element.
 */
export function u(props: Record<PropertyKey, unknown>): string {
  return renderElement("u", props);
}
