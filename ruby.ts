import { renderElement } from "./shared/mod.ts";

/**
 * ruby renders a ruby element.
 */
export function ruby(props: Record<PropertyKey, unknown>): string {
  return renderElement("ruby", props);
}
