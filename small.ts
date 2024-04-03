import { renderElement } from "./shared/mod.ts";

/**
 * small renders a small element.
 */
export function small(props: Record<PropertyKey, unknown>): string {
  return renderElement("small", props);
}
