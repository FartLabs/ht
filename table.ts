/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TableElementProps are the props for the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table>
 */
export interface TableElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `border` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#border>
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `cellpadding` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#cellpadding>
   * @deprecated
   */
  cellpadding?: string | undefined;
  /**
   * `cellspacing` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#cellspacing>
   * @deprecated
   */
  cellspacing?: string | undefined;
  /**
   * `frame` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#frame>
   * @deprecated
   */
  frame?: string | undefined;
  /**
   * `rules` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#rules>
   * @deprecated
   */
  rules?: string | undefined;
  /**
   * `summary` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#summary>
   * @deprecated
   */
  summary?: string | undefined;
  /**
   * `width` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * table renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table>
 */
export function table(
  props?: TableElementProps,
  ...children: string[]
): string {
  return renderElement("table", props as AnyProps, false, children);
}
