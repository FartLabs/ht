import { renderElement } from "./shared/mod.ts";

/**
 * noscript renders a noscript element.
 */
export function noscript(props: Record<PropertyKey, unknown>): string {
  return renderElement("noscript", props);
}
