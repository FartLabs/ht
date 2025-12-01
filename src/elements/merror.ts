/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MerrorElementProps are the props for the [`merror`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror>
 */
export interface MerrorElementProps extends GlobalAttributes {
}

/**
 * merror renders the [`merror`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror>
 */
export function merror(
  props?: MerrorElementProps,
  ...children: string[]
): string {
  return renderElement("merror", props as AnyProps, false, children);
}
