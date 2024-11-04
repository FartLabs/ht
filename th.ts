/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ThElementProps are the props for the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th>
 */
export interface ThElementProps extends GlobalAttributes {
  /**
   * `abbr` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#abbr>
   */
  abbr?: string | undefined;
  /**
   * `align` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `axis` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#axis>
   * @deprecated
   */
  axis?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `colspan` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#colspan>
   */
  colspan?: string | undefined;
  /**
   * `headers` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#headers>
   */
  headers?: string | undefined;
  /**
   * `rowspan` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#rowspan>
   */
  rowspan?: string | undefined;
  /**
   * `scope` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#scope>
   */
  scope?: string | undefined;
  /**
   * `valign` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#valign>
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * th renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th>
 */
export function th(props?: ThElementProps, ...children: string[]): string {
  return renderElement("th", props as AnyProps, false, children);
}
