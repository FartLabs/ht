import { renderElement } from "./shared/mod.ts";

/**
 * frameset renders a frameset element.
 */
export function frameset(props: Record<PropertyKey, unknown>): string {
  return renderElement("frameset", props);
}
