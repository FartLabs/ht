import { renderElement } from "./shared/mod.ts";

/**
 * iframe renders a iframe element.
 */
export function iframe(props: Record<PropertyKey, unknown>): string {
  return renderElement("iframe", props);
}
