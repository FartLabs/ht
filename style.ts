import { renderElement } from "./shared/mod.ts";

/**
 * style renders a style element.
 */
export function style(props: Record<PropertyKey, unknown>): string {
  return renderElement("style", props);
}
