import { renderElement } from "./shared/mod.ts";

/**
 * aside renders a aside element.
 */
export function aside(props: Record<PropertyKey, unknown>): string {
  return renderElement("aside", props);
}
