/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * PolylineElementProps are the props for the [`polyline`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline>
 */
export interface PolylineElementProps extends GlobalAttributes {
  /**
   * `fill` is an attribute of the [`polyline`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline#fill>
   */
  fill?: string | undefined;
  /**
   * `points` is an attribute of the [`polyline`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline#points>
   */
  points?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`polyline`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * polyline renders the [`polyline`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline>
 */
export function polyline(
  props?: PolylineElementProps,
  ...children: string[]
): string {
  return renderElement("polyline", props as AnyProps, false, children);
}
