/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AbbrElementProps are the props for the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr>
 */
export interface AbbrElementProps extends GlobalAttributes {
}

/**
 * abbr renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr>
 */
export function abbr(props?: AbbrElementProps, ...children: string[]): string {
  return renderElement("abbr", props as AnyProps, false, children);
}
