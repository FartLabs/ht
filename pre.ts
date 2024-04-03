import { renderElement } from "./shared/mod.ts";

/**
 * pre renders a pre element.
 */
export function pre(props: Record<PropertyKey, unknown>): string {
  return renderElement("pre", props);
}
