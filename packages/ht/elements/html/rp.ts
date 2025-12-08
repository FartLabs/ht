/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

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
