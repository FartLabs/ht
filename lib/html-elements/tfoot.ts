/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * TfootElementProps are the props for the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot>
 */
export interface TfootElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * tfoot renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot>
 */
export function tfoot(
  props?: TfootElementProps,
  ...children: string[]
): string {
  return renderElement("tfoot", props as AnyProps, false, children);
}
