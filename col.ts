/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ColElementProps are the props for the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col>
 */
export interface ColElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `char` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `span` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col#span>
   */
  span?: string | undefined;
  /**
   * `valign` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col#valign>
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * col renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col>
 */
export function col(props?: ColElementProps): string {
  return renderElement("col", props as AnyProps, true);
}
