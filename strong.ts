import { renderElement } from "./shared/mod.ts";

/**
 * strong renders a strong element.
 */
export function strong(props: Record<PropertyKey, unknown>): string {
  return renderElement("strong", props);
}
