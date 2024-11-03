/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TdElementProps are the props for the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/td>
 */
export interface TdElementProps extends GlobalAttributes {
  /**
   * `abbr` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  abbr?: string | undefined;
  /**
   * `align` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `axis` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  axis?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  charoff?: string | undefined;
  /** `colspan` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element. */
  colspan?: string | undefined;
  /** `headers` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element. */
  headers?: string | undefined;
  /** `rowspan` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element. */
  rowspan?: string | undefined;
  /**
   * `scope` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  scope?: string | undefined;
  /**
   * `valign` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * td renders the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/td>
 */
export function td(props?: TdElementProps, ...children: string[]): string {
  return renderElement("td", props as AnyProps, false, children);
}
