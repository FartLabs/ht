/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * IElementProps are the props for the [`i`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i>
 */
export interface IElementProps extends GlobalAttributes {
}

/**
 * i renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i>
 */
export function i(props?: IElementProps, ...children: string[]): string {
  return renderElement("i", props as AnyProps, false, children);
}
