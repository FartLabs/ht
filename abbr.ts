/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AbbrElementProps are the props for the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/abbr>
 */
export interface AbbrElementProps extends GlobalAttributes {
}

/**
 * abbr renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/abbr>
 */
export function abbr(props?: AbbrElementProps, ...children: string[]): string {
  return renderElement("abbr", props as AnyProps, false, children);
}
