/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeFuncBElementProps are the props for the [`feFuncB`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB>
 */
export interface FeFuncBElementProps extends GlobalAttributes {
}

/**
 * feFuncB renders the [`feFuncB`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB>
 */
export function feFuncB(
  props?: FeFuncBElementProps,
  ...children: string[]
): string {
  return renderElement("feFuncB", props as AnyProps, false, children);
}
