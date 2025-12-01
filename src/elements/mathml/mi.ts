/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MiElementProps are the props for the [`mi`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi>
 */
export interface MiElementProps extends GlobalAttributes {
  /**
   * `mathvariant` is an attribute of the [`mi`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi#mathvariant>
   */
  mathvariant?: string | undefined;
}

/**
 * mi renders the [`mi`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi>
 */
export function mi(props?: MiElementProps, ...children: string[]): string {
  return renderElement("mi", props as AnyProps, false, children);
}
