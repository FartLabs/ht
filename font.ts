/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FontElementProps are the props for the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/font>
 * @deprecated
 */
export interface FontElementProps extends GlobalAttributes {
  /**
   * `color` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
   * @deprecated
   */
  color?: string | undefined;
  /**
   * `face` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
   * @deprecated
   */
  face?: string | undefined;
  /**
   * `size` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
   * @deprecated
   */
  size?: string | undefined;
}

/**
 * font renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/font>
 * @deprecated
 */
export function font(props?: FontElementProps, ...children: string[]): string {
  return renderElement("font", props as AnyProps, false, children);
}
