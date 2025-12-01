/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MaskElementProps are the props for the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask>
 */
export interface MaskElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask#height>
   */
  height?: string | undefined;
  /**
   * `maskContentUnits` is an attribute of the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask#maskContentUnits>
   */
  maskContentUnits?: string | undefined;
  /**
   * `maskUnits` is an attribute of the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask#maskUnits>
   */
  maskUnits?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `width` is an attribute of the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask#y>
   */
  y?: string | undefined;
}

/**
 * mask renders the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask>
 */
export function mask(props?: MaskElementProps, ...children: string[]): string {
  return renderElement("mask", props as AnyProps, false, children);
}
