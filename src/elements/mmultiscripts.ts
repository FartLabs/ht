/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MmultiscriptsElementProps are the props for the [`mmultiscripts`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts>
 */
export interface MmultiscriptsElementProps extends GlobalAttributes {
  /**
   * `subscriptshift` is an attribute of the [`mmultiscripts`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts#subscriptshift>
   * @deprecated
   */
  subscriptshift?: string | undefined;
  /**
   * `superscriptshift` is an attribute of the [`mmultiscripts`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts#superscriptshift>
   * @deprecated
   */
  superscriptshift?: string | undefined;
}

/**
 * mmultiscripts renders the [`mmultiscripts`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts>
 */
export function mmultiscripts(
  props?: MmultiscriptsElementProps,
  ...children: string[]
): string {
  return renderElement("mmultiscripts", props as AnyProps, false, children);
}
