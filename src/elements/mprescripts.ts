/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MprescriptsElementProps are the props for the [`mprescripts`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mprescripts) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mprescripts>
 */
export interface MprescriptsElementProps extends GlobalAttributes {
}

/**
 * mprescripts renders the [`mprescripts`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mprescripts) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mprescripts>
 */
export function mprescripts(
  props?: MprescriptsElementProps,
  ...children: string[]
): string {
  return renderElement("mprescripts", props as AnyProps, false, children);
}
