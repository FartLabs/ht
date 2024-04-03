import { renderElement } from "./shared/mod.ts";

/**
 * samp renders a samp element.
 */
export function samp(props: Record<PropertyKey, unknown>): string {
  return renderElement("samp", props);
}
