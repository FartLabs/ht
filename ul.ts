/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * UlElementProps are the props for the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export interface UlElementProps extends GlobalAttributes {
  /**
   * `compact` is an attribute of the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul#compact>
   * @deprecated
   */
  compact?: string | undefined;
  /**
   * `type` is an attribute of the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul#type>
   * @deprecated
   */
  type?: string | undefined;
}

/**
 * ul renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export function ul(props?: UlElementProps, ...children: string[]): string {
  return renderElement("ul", props as AnyProps, false, children);
}
