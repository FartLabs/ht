/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * BdiElementProps are the props for the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export interface BdiElementProps extends GlobalAttributes {
}

/**
 * bdi renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export function bdi(props?: BdiElementProps, ...children: string[]): string {
  return renderElement("bdi", props as AnyProps, false, children);
}
