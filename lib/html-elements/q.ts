/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * QElementProps are the props for the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export interface QElementProps extends GlobalAttributes {
  /**
   * `cite` is an attribute of the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q#cite>
   */
  cite?: string | undefined;
}

/**
 * q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export function q(props?: QElementProps, ...children: string[]): string {
  return renderElement("q", props as AnyProps, false, children);
}
