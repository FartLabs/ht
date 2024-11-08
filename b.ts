/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BElementProps are the props for the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/b>
 */
export interface BElementProps extends GlobalAttributes {
}

/**
 * b renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/b>
 */
export function b(props?: BElementProps, ...children: string[]): string {
  return renderElement("b", props as AnyProps, false, children);
}
