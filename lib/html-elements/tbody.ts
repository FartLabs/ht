/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * TbodyElementProps are the props for the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody>
 */
export interface TbodyElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * tbody renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody>
 */
export function tbody(
  props?: TbodyElementProps,
  ...children: string[]
): string {
  return renderElement("tbody", props as AnyProps, false, children);
}
