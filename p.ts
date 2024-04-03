import { renderElement } from "./shared/mod.ts";

/**
 * p renders a p element.
 */
export function p(props: Record<PropertyKey, unknown>): string {
  return renderElement("p", props);
}
