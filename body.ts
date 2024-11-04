/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BodyElementProps are the props for the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body>
 */
export interface BodyElementProps extends GlobalAttributes {
  /**
   * `alink` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#alink>
   * @deprecated
   */
  alink?: string | undefined;
  /**
   * `background` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#background>
   * @deprecated
   */
  background?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `bottommargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#bottommargin>
   * @deprecated
   */
  bottommargin?: string | undefined;
  /**
   * `leftmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#leftmargin>
   * @deprecated
   */
  leftmargin?: string | undefined;
  /**
   * `link` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#link>
   * @deprecated
   */
  link?: string | undefined;
  /**
   * `rightmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#rightmargin>
   * @deprecated
   */
  rightmargin?: string | undefined;
  /**
   * `text` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#text>
   * @deprecated
   */
  text?: string | undefined;
  /**
   * `topmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#topmargin>
   * @deprecated
   */
  topmargin?: string | undefined;
  /**
   * `vlink` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body#vlink>
   * @deprecated
   */
  vlink?: string | undefined;
}

/**
 * body renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body>
 */
export function body(props?: BodyElementProps, ...children: string[]): string {
  return renderElement("body", props as AnyProps, false, children);
}
