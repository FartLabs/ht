/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

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
