/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SemanticsElementProps are the props for the [`semantics`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics>
 */
export interface SemanticsElementProps extends GlobalAttributes {
}

/**
 * semantics renders the [`semantics`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics>
 */
export function semantics(
  props?: SemanticsElementProps,
  ...children: string[]
): string {
  return renderElement("semantics", props as AnyProps, false, children);
}
