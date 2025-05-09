/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TableElementProps are the props for the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export interface TableElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `border` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#border>
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `cellpadding` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#cellpadding>
   * @deprecated
   */
  cellpadding?: string | undefined;
  /**
   * `cellspacing` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#cellspacing>
   * @deprecated
   */
  cellspacing?: string | undefined;
  /**
   * `frame` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#frame>
   * @deprecated
   */
  frame?: string | undefined;
  /**
   * `rules` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#rules>
   * @deprecated
   */
  rules?: string | undefined;
  /**
   * `summary` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#summary>
   * @deprecated
   */
  summary?: string | undefined;
  /**
   * `width` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * table renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export function table(
  props?: TableElementProps,
  ...children: string[]
): string {
  return renderElement("table", props as AnyProps, false, children);
}
