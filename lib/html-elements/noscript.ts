/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * NoscriptElementProps are the props for the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript>
 */
export interface NoscriptElementProps extends GlobalAttributes {
}

/**
 * noscript renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript>
 */
export function noscript(
  props?: NoscriptElementProps,
  ...children: string[]
): string {
  return renderElement("noscript", props as AnyProps, false, children);
}
