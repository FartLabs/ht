/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TdElementProps are the props for the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td>
 */
export interface TdElementProps extends GlobalAttributes {
  /**
   * `abbr` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#abbr>
   * @deprecated
   */
  abbr?: string | undefined;
  /**
   * `align` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `axis` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#axis>
   * @deprecated
   */
  axis?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `colspan` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#colspan>
   */
  colspan?: string | undefined;
  /**
   * `headers` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#headers>
   */
  headers?: string | undefined;
  /**
   * `rowspan` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#rowspan>
   */
  rowspan?: string | undefined;
  /**
   * `scope` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#scope>
   * @deprecated
   */
  scope?: string | undefined;
  /**
   * `valign` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#valign>
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * td renders the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td>
 */
export function td(props?: TdElementProps, ...children: string[]): string {
  return renderElement("td", props as AnyProps, false, children);
}
