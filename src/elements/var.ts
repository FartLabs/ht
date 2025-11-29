/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * VarElementProps are the props for the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export interface VarElementProps extends GlobalAttributes {
}

/**
 * var_ renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export function var_(props?: VarElementProps, ...children: string[]): string {
  return renderElement("var", props as AnyProps, false, children);
}
