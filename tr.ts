/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TrElementProps are the props for the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export interface TrElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * tr renders the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export function tr(props?: TrElementProps, ...children: string[]): string {
  return renderElement("tr", props as AnyProps, false, children);
}
