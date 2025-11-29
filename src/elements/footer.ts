/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

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
