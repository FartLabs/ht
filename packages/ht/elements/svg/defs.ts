/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DefsElementProps are the props for the [`defs`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs>
 */
export interface DefsElementProps extends GlobalAttributes {
  /**
   * `systemLanguage` is an attribute of the [`defs`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * defs renders the [`defs`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs>
 */
export function defs(props?: DefsElementProps, ...children: string[]): string {
  return renderElement("defs", props as AnyProps, false, children);
}
