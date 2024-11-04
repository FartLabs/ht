/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TfootElementProps are the props for the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export interface TfootElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * tfoot renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export function tfoot(
  props?: TfootElementProps,
  ...children: string[]
): string {
  return renderElement("tfoot", props as AnyProps, false, children);
}
