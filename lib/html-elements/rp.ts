/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * RpElementProps are the props for the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export interface RpElementProps extends GlobalAttributes {
}

/**
 * rp renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export function rp(props?: RpElementProps, ...children: string[]): string {
  return renderElement("rp", props as AnyProps, false, children);
}
