/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * BodyElementProps are the props for the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export interface BodyElementProps extends GlobalAttributes {
  /**
   * `alink` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#alink>
   * @deprecated
   */
  alink?: string | undefined;
  /**
   * `background` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#background>
   * @deprecated
   */
  background?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `bottommargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#bottommargin>
   * @deprecated
   */
  bottommargin?: string | undefined;
  /**
   * `leftmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#leftmargin>
   * @deprecated
   */
  leftmargin?: string | undefined;
  /**
   * `link` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#link>
   * @deprecated
   */
  link?: string | undefined;
  /**
   * `rightmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#rightmargin>
   * @deprecated
   */
  rightmargin?: string | undefined;
  /**
   * `text` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#text>
   * @deprecated
   */
  text?: string | undefined;
  /**
   * `topmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#topmargin>
   * @deprecated
   */
  topmargin?: string | undefined;
  /**
   * `vlink` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#vlink>
   * @deprecated
   */
  vlink?: string | undefined;
}

/**
 * body renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export function body(props?: BodyElementProps, ...children: string[]): string {
  return renderElement("body", props as AnyProps, false, children);
}
