/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeFloodElementProps are the props for the [`feFlood`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood>
 */
export interface FeFloodElementProps extends GlobalAttributes {
}

/**
 * feFlood renders the [`feFlood`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood>
 */
export function feFlood(
  props?: FeFloodElementProps,
  ...children: string[]
): string {
  return renderElement("feFlood", props as AnyProps, false, children);
}
