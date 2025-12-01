/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeFuncAElementProps are the props for the [`feFuncA`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA>
 */
export interface FeFuncAElementProps extends GlobalAttributes {
}

/**
 * feFuncA renders the [`feFuncA`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA>
 */
export function feFuncA(
  props?: FeFuncAElementProps,
  ...children: string[]
): string {
  return renderElement("feFuncA", props as AnyProps, false, children);
}
