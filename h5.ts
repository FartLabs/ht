import { renderElement } from "./shared/mod.ts";

/**
 * h5 renders a h5 element.
 */
export function h5(props: Record<PropertyKey, unknown>): string {
  return renderElement("h5", props);
}
