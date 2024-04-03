import { renderElement } from "./shared/mod.ts";

/**
 * search renders a search element.
 */
export function search(props: Record<PropertyKey, unknown>): string {
  return renderElement("search", props);
}
