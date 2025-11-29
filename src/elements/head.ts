/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

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
