/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * BElementProps are the props for the [`b`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b>
 */
export interface BElementProps extends GlobalAttributes {
}

/**
 * b renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b>
 */
export function b(props?: BElementProps, ...children: string[]): string {
  return renderElement("b", props as AnyProps, false, children);
}
