/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MathElementProps are the props for the [`math`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math>
 */
export interface MathElementProps extends GlobalAttributes {
  /**
   * `display` is an attribute of the [`math`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math#display>
   */
  display?: string | undefined;
}

/**
 * math renders the [`math`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math>
 */
export function math(props?: MathElementProps, ...children: string[]): string {
  return renderElement("math", props as AnyProps, false, children);
}
