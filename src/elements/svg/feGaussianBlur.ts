/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeGaussianBlurElementProps are the props for the [`feGaussianBlur`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur>
 */
export interface FeGaussianBlurElementProps extends GlobalAttributes {
  /**
   * `edgeMode` is an attribute of the [`feGaussianBlur`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur#edgeMode>
   */
  edgeMode?: string | undefined;
  /**
   * `in` is an attribute of the [`feGaussianBlur`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur#in>
   */
  in?: string | undefined;
  /**
   * `stdDeviation` is an attribute of the [`feGaussianBlur`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur#stdDeviation>
   */
  stdDeviation?: string | undefined;
}

/**
 * feGaussianBlur renders the [`feGaussianBlur`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur>
 */
export function feGaussianBlur(
  props?: FeGaussianBlurElementProps,
  ...children: string[]
): string {
  return renderElement("feGaussianBlur", props as AnyProps, false, children);
}
