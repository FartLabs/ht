/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeFuncGElementProps are the props for the [`feFuncG`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG>
 */
export interface FeFuncGElementProps extends GlobalAttributes {
}

/**
 * feFuncG renders the [`feFuncG`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG>
 */
export function feFuncG(
  props?: FeFuncGElementProps,
  ...children: string[]
): string {
  return renderElement("feFuncG", props as AnyProps, false, children);
}
