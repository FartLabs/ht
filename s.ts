/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SElementProps are the props for the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/s>
 */
export interface SElementProps extends GlobalAttributes {
}

/**
 * s renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/s>
 */
export function s(props?: SElementProps, ...children: string[]): string {
  return renderElement("s", props as AnyProps, false, children);
}
