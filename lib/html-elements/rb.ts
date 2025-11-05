/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * RbElementProps are the props for the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export interface RbElementProps extends GlobalAttributes {
}

/**
 * rb renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export function rb(props?: RbElementProps, ...children: string[]): string {
  return renderElement("rb", props as AnyProps, false, children);
}
