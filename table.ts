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
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `border` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `cellpadding` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @deprecated
   */
  cellpadding?: string | undefined;
  /**
   * `cellspacing` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @deprecated
   */
  cellspacing?: string | undefined;
  /**
   * `frame` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @deprecated
   */
  frame?: string | undefined;
  /**
   * `rules` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @deprecated
   */
  rules?: string | undefined;
  /**
   * `summary` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
   * @deprecated
   */
  summary?: string | undefined;
  /**
   * `width` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
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
