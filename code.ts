/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CodeElementProps are the props for the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/code>
 */
export interface CodeElementProps extends GlobalAttributes {
}

/**
 * code renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/code>
 */
export function code(props?: CodeElementProps, ...children: string[]): string {
  return renderElement("code", props as AnyProps, false, children);
}
