/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * SupElementProps are the props for the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup>
 */
export interface SupElementProps extends GlobalAttributes {
}

/**
 * sup renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup>
 */
export function sup(props?: SupElementProps, ...children: string[]): string {
  return renderElement("sup", props as AnyProps, false, children);
}
