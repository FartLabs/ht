import { renderElement } from "./shared/mod.ts";

/**
 * ins renders a ins element.
 */
export function ins(props: Record<PropertyKey, unknown>): string {
  return renderElement("ins", props);
}
