/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * SElementProps are the props for the [`s`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s>
 */
export interface SElementProps extends GlobalAttributes {
}

/**
 * s renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s>
 */
export function s(props?: SElementProps, ...children: string[]): string {
  return renderElement("s", props as AnyProps, false, children);
}
