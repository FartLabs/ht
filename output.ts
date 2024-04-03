import { renderElement } from "./shared/mod.ts";

/**
 * output renders a output element.
 */
export function output(props: Record<PropertyKey, unknown>): string {
  return renderElement("output", props);
}
