import { renderElement } from "./shared/mod.ts";

/**
 * acronym renders a acronym element.
 */
export function acronym(props: Record<PropertyKey, unknown>): string {
  return renderElement("acronym", props);
}
