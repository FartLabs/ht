/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MnElementProps are the props for the [`mn`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn>
 */
export interface MnElementProps extends GlobalAttributes {
}

/**
 * mn renders the [`mn`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn>
 */
export function mn(props?: MnElementProps, ...children: string[]): string {
  return renderElement("mn", props as AnyProps, false, children);
}
