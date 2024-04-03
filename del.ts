import { renderElement } from "./shared/mod.ts";

/**
 * del renders a del element.
 */
export function del(props: Record<PropertyKey, unknown>): string {
  return renderElement("del", props);
}
