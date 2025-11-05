/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * StrikeElementProps are the props for the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike>
 * @deprecated
 */
export interface StrikeElementProps extends GlobalAttributes {
}

/**
 * strike renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike>
 * @deprecated
 */
export function strike(
  props?: StrikeElementProps,
  ...children: string[]
): string {
  return renderElement("strike", props as AnyProps, false, children);
}
