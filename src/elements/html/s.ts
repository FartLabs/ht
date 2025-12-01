/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SElementProps are the props for the [`s`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s>
 */
export interface SElementProps extends GlobalAttributes {
}

/**
 * s renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s>
 */
export function s(props?: SElementProps, ...children: string[]): string {
  return renderElement("s", props as AnyProps, false, children);
}
