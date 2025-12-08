/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RectElementProps are the props for the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect>
 */
export interface RectElementProps extends GlobalAttributes {
  /**
   * `fill` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#fill>
   */
  fill?: string | undefined;
  /**
   * `height` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#height>
   */
  height?: string | undefined;
  /**
   * `rx` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#rx>
   */
  rx?: string | undefined;
  /**
   * `ry` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#ry>
   */
  ry?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `width` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect#y>
   */
  y?: string | undefined;
}

/**
 * rect renders the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect>
 */
export function rect(props?: RectElementProps, ...children: string[]): string {
  return renderElement("rect", props as AnyProps, false, children);
}
