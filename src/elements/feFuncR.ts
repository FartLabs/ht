/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeFuncRElementProps are the props for the [`feFuncR`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR>
 */
export interface FeFuncRElementProps extends GlobalAttributes {
}

/**
 * feFuncR renders the [`feFuncR`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR>
 */
export function feFuncR(
  props?: FeFuncRElementProps,
  ...children: string[]
): string {
  return renderElement("feFuncR", props as AnyProps, false, children);
}
