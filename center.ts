import { renderElement } from "./shared/mod.ts";

/**
 * center renders a center element.
 */
export function center(props: Record<PropertyKey, unknown>): string {
  return renderElement("center", props);
}
