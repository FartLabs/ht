/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MpathElementProps are the props for the [`mpath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath>
 */
export interface MpathElementProps extends GlobalAttributes {
  /**
   * `href` is an attribute of the [`mpath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath#href>
   */
  href?: string | undefined;
}

/**
 * mpath renders the [`mpath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath>
 */
export function mpath(
  props?: MpathElementProps,
  ...children: string[]
): string {
  return renderElement("mpath", props as AnyProps, false, children);
}
