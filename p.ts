/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * PElementProps are the props for the [`p`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p>
 */
export interface PElementProps extends GlobalAttributes {
}

/**
 * p renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p>
 */
export function p(props?: PElementProps, ...children: string[]): string {
  return renderElement("p", props as AnyProps, false, children);
}
