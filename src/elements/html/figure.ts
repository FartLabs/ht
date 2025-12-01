/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FigureElementProps are the props for the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure>
 */
export interface FigureElementProps extends GlobalAttributes {
}

/**
 * figure renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure>
 */
export function figure(
  props?: FigureElementProps,
  ...children: string[]
): string {
  return renderElement("figure", props as AnyProps, false, children);
}
