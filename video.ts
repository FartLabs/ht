import { renderElement } from "./shared/mod.ts";

/**
 * video renders a video element.
 */
export function video(props: Record<PropertyKey, unknown>): string {
  return renderElement("video", props);
}
