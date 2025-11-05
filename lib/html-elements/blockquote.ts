/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * BlockquoteElementProps are the props for the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote>
 */
export interface BlockquoteElementProps extends GlobalAttributes {
  /**
   * `cite` is an attribute of the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote#cite>
   */
  cite?: string | undefined;
}

/**
 * blockquote renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote>
 */
export function blockquote(
  props?: BlockquoteElementProps,
  ...children: string[]
): string {
  return renderElement("blockquote", props as AnyProps, false, children);
}
