/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

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
