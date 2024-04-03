import { renderElement } from "./shared/mod.ts";

/**
 * track renders a track element.
 */
export function track(props: Record<PropertyKey, unknown>): string {
  return renderElement("track", props);
}
