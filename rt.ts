import { renderElement } from "./shared/mod.ts";

/**
 * rt renders a rt element.
 */
export function rt(props: Record<PropertyKey, unknown>): string {
  return renderElement("rt", props);
}
