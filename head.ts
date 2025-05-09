/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HeadElementProps are the props for the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export interface HeadElementProps extends GlobalAttributes {
}

/**
 * head renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export function head(props?: HeadElementProps, ...children: string[]): string {
  return renderElement("head", props as AnyProps, false, children);
}
