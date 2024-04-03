import { renderElement } from "./shared/mod.ts";

/**
 * embed renders a embed element.
 */
export function embed(props: Record<PropertyKey, unknown>): string {
  return renderElement("embed", props);
}
