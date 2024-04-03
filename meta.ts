import { renderElement } from "./shared/mod.ts";

/**
 * meta renders a meta element.
 */
export function meta(props: Record<PropertyKey, unknown>): string {
  return renderElement("meta", props);
}
