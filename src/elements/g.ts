/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * GElementProps are the props for the [`g`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g>
 */
export interface GElementProps extends GlobalAttributes {
  /**
   * `systemLanguage` is an attribute of the [`g`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * g renders the [`g`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g>
 */
export function g(props?: GElementProps, ...children: string[]): string {
  return renderElement("g", props as AnyProps, false, children);
}
