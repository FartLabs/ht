/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * StrongElementProps are the props for the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong>
 */
export interface StrongElementProps extends GlobalAttributes {
}

/**
 * strong renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong>
 */
export function strong(
  props?: StrongElementProps,
  ...children: string[]
): string {
  return renderElement("strong", props as AnyProps, false, children);
}
