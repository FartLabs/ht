/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ColgroupElementProps are the props for the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup>
 */
export interface ColgroupElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `char` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `span` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup#span>
   */
  span?: string | undefined;
  /**
   * `valign` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup#valign>
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * colgroup renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup>
 */
export function colgroup(
  props?: ColgroupElementProps,
  ...children: string[]
): string {
  return renderElement("colgroup", props as AnyProps, false, children);
}
