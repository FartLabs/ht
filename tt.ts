import { renderElement } from "./shared/mod.ts";

/**
 * tt renders a tt element.
 */
export function tt(props: Record<PropertyKey, unknown>): string {
  return renderElement("tt", props);
}
