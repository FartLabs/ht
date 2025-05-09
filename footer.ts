/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FooterElementProps are the props for the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export interface FooterElementProps extends GlobalAttributes {
}

/**
 * footer renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export function footer(
  props?: FooterElementProps,
  ...children: string[]
): string {
  return renderElement("footer", props as AnyProps, false, children);
}
