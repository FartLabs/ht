import { renderElement } from "./shared/mod.ts";

/**
 * wbr renders a wbr element.
 */
export function wbr(props: Record<PropertyKey, unknown>): string {
  return renderElement("wbr", props);
}
