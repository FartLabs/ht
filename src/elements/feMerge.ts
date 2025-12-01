/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeMergeElementProps are the props for the [`feMerge`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMerge) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMerge>
 */
export interface FeMergeElementProps extends GlobalAttributes {
}

/**
 * feMerge renders the [`feMerge`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMerge) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMerge>
 */
export function feMerge(
  props?: FeMergeElementProps,
  ...children: string[]
): string {
  return renderElement("feMerge", props as AnyProps, false, children);
}
