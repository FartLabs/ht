import { renderElement } from "./shared/mod.ts";

/**
 * dd renders a dd element.
 */
export function dd(props: Record<PropertyKey, unknown>): string {
  return renderElement("dd", props);
}
