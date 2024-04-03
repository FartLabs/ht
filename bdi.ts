import { renderElement } from "./shared/mod.ts";

/**
 * bdi renders a bdi element.
 */
export function bdi(props: Record<PropertyKey, unknown>): string {
  return renderElement("bdi", props);
}
