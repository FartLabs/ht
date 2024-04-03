import { renderElement } from "./shared/mod.ts";

/**
 * portal renders a portal element.
 */
export function portal(props: Record<PropertyKey, unknown>): string {
  return renderElement("portal", props);
}
