import { renderElement } from "./shared/mod.ts";

/**
 * param renders a param element.
 */
export function param(props: Record<PropertyKey, unknown>): string {
  return renderElement("param", props);
}
