import { renderElement } from "./shared/mod.ts";

/**
 * frame renders a frame element.
 */
export function frame(props: Record<PropertyKey, unknown>): string {
  return renderElement("frame", props);
}
