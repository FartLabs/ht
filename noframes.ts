import { renderElement } from "./shared/mod.ts";

/**
 * noframes renders a noframes element.
 */
export function noframes(props: Record<PropertyKey, unknown>): string {
  return renderElement("noframes", props);
}
