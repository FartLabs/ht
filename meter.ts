import { renderElement } from "./shared/mod.ts";

/**
 * meter renders a meter element.
 */
export function meter(props: Record<PropertyKey, unknown>): string {
  return renderElement("meter", props);
}
