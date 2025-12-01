/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MphantomElementProps are the props for the [`mphantom`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom>
 */
export interface MphantomElementProps extends GlobalAttributes {
}

/**
 * mphantom renders the [`mphantom`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom>
 */
export function mphantom(
  props?: MphantomElementProps,
  ...children: string[]
): string {
  return renderElement("mphantom", props as AnyProps, false, children);
}
