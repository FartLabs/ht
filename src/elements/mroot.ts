/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MrootElementProps are the props for the [`mroot`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mroot) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mroot>
 */
export interface MrootElementProps extends GlobalAttributes {
}

/**
 * mroot renders the [`mroot`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mroot) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mroot>
 */
export function mroot(
  props?: MrootElementProps,
  ...children: string[]
): string {
  return renderElement("mroot", props as AnyProps, false, children);
}
