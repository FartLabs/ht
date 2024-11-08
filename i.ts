/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * IElementProps are the props for the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/i>
 */
export interface IElementProps extends GlobalAttributes {
}

/**
 * i renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/i>
 */
export function i(props?: IElementProps, ...children: string[]): string {
  return renderElement("i", props as AnyProps, false, children);
}
