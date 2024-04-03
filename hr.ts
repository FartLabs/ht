import { renderElement } from "./shared/mod.ts";

/**
 * hr renders a hr element.
 */
export function hr(props: Record<PropertyKey, unknown>): string {
  return renderElement("hr", props);
}
