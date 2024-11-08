/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TtElementProps are the props for the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tt>
 * @deprecated
 */
export interface TtElementProps extends GlobalAttributes {
}

/**
 * tt renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tt>
 * @deprecated
 */
export function tt(props?: TtElementProps, ...children: string[]): string {
  return renderElement("tt", props as AnyProps, false, children);
}
