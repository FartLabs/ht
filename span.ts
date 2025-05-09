/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SpanElementProps are the props for the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export interface SpanElementProps extends GlobalAttributes {
}

/**
 * span renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export function span(props?: SpanElementProps, ...children: string[]): string {
  return renderElement("span", props as AnyProps, false, children);
}
