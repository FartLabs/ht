/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * EmElementProps are the props for the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export interface EmElementProps extends GlobalAttributes {
}

/**
 * em renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export function em(props?: EmElementProps, ...children: string[]): string {
  return renderElement("em", props as AnyProps, false, children);
}
