/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MencloseElementProps are the props for the [`menclose`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose>
 */
export interface MencloseElementProps extends GlobalAttributes {
  /**
   * `notation` is an attribute of the [`menclose`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose#notation>
   */
  notation?: string | undefined;
}

/**
 * menclose renders the [`menclose`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose>
 */
export function menclose(
  props?: MencloseElementProps,
  ...children: string[]
): string {
  return renderElement("menclose", props as AnyProps, false, children);
}
