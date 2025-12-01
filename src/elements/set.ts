/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * SetElementProps are the props for the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set>
 */
export interface SetElementProps extends GlobalAttributes {
  /**
   * `fill` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#fill>
   */
  fill?: string | undefined;
  /**
   * `href` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#href>
   */
  href?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `to` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#to>
   */
  to?: string | undefined;
}

/**
 * set renders the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set>
 */
export function set(props?: SetElementProps, ...children: string[]): string {
  return renderElement("set", props as AnyProps, false, children);
}
