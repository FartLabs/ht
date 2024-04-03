import { renderElement } from "./shared/mod.ts";

/**
 * xmp renders a xmp element.
 */
export function xmp(props: Record<PropertyKey, unknown>): string {
  return renderElement("xmp", props);
}
