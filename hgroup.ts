import { renderElement } from "./shared/mod.ts";

/**
 * hgroup renders a hgroup element.
 */
export function hgroup(props: Record<PropertyKey, unknown>): string {
  return renderElement("hgroup", props);
}
