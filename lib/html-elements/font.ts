/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * FontElementProps are the props for the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export interface FontElementProps extends GlobalAttributes {
  /**
   * `color` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font#color>
   * @deprecated
   */
  color?: string | undefined;
  /**
   * `face` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font#face>
   * @deprecated
   */
  face?: string | undefined;
  /**
   * `size` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font#size>
   * @deprecated
   */
  size?: string | undefined;
}

/**
 * font renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export function font(props?: FontElementProps, ...children: string[]): string {
  return renderElement("font", props as AnyProps, false, children);
}
