/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MsElementProps are the props for the [`ms`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/ms) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/ms>
 */
export interface MsElementProps extends GlobalAttributes {
}

/**
 * ms renders the [`ms`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/ms) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/ms>
 */
export function ms(props?: MsElementProps, ...children: string[]): string {
  return renderElement("ms", props as AnyProps, false, children);
}
