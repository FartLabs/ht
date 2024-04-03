import { renderElement } from "./shared/mod.ts";

/**
 * progress renders a progress element.
 */
export function progress(props: Record<PropertyKey, unknown>): string {
  return renderElement("progress", props);
}
