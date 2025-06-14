/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * InsElementProps are the props for the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export interface InsElementProps extends GlobalAttributes {
  /**
   * `cite` is an attribute of the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins#cite>
   */
  cite?: string | undefined;
  /**
   * `datetime` is an attribute of the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins#datetime>
   */
  datetime?: string | undefined;
}

/**
 * ins renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export function ins(props?: InsElementProps, ...children: string[]): string {
  return renderElement("ins", props as AnyProps, false, children);
}
