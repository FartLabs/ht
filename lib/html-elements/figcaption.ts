/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * FigcaptionElementProps are the props for the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption>
 */
export interface FigcaptionElementProps extends GlobalAttributes {
}

/**
 * figcaption renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption>
 */
export function figcaption(
  props?: FigcaptionElementProps,
  ...children: string[]
): string {
  return renderElement("figcaption", props as AnyProps, false, children);
}
