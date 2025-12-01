/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MfencedElementProps are the props for the [`mfenced`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced>
 * @deprecated
 */
export interface MfencedElementProps extends GlobalAttributes {
}

/**
 * mfenced renders the [`mfenced`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced>
 * @deprecated
 */
export function mfenced(
  props?: MfencedElementProps,
  ...children: string[]
): string {
  return renderElement("mfenced", props as AnyProps, false, children);
}
