import { renderElement } from "./shared/mod.ts";

/**
 * base renders a base element.
 */
export function base(props: Record<PropertyKey, unknown>): string {
  return renderElement("base", props);
}
