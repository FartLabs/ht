import { renderElement } from "./shared/mod.ts";

/**
 * kbd renders a kbd element.
 */
export function kbd(props: Record<PropertyKey, unknown>): string {
  return renderElement("kbd", props);
}
