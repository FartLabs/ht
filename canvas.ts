import { renderElement } from "./shared/mod.ts";

/**
 * canvas renders a canvas element.
 */
export function canvas(props: Record<PropertyKey, unknown>): string {
  return renderElement("canvas", props);
}
