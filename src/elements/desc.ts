/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * DescElementProps are the props for the [`desc`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/desc) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/desc>
 */
export interface DescElementProps extends GlobalAttributes {
}

/**
 * desc renders the [`desc`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/desc) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/desc>
 */
export function desc(props?: DescElementProps, ...children: string[]): string {
  return renderElement("desc", props as AnyProps, false, children);
}
