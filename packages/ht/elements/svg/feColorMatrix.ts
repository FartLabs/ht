/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeColorMatrixElementProps are the props for the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix>
 */
export interface FeColorMatrixElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix#in>
   */
  in?: string | undefined;
  /**
   * `type` is an attribute of the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix#type>
   */
  type?: string | undefined;
  /**
   * `values` is an attribute of the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix#values>
   */
  values?: string | undefined;
}

/**
 * feColorMatrix renders the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix>
 */
export function feColorMatrix(
  props?: FeColorMatrixElementProps,
  ...children: string[]
): string {
  return renderElement("feColorMatrix", props as AnyProps, false, children);
}
