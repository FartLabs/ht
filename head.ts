/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HeadElementProps are the props for the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/head>
 */
export interface HeadElementProps extends GlobalAttributes {
  /**
   * `profile` is an attribute of the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/head#profile>
   * @deprecated
   */
  profile?: string | undefined;
}

/**
 * head renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/head>
 */
export function head(props?: HeadElementProps, ...children: string[]): string {
  return renderElement("head", props as AnyProps, false, children);
}
