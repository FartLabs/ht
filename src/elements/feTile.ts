/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeTileElementProps are the props for the [`feTile`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile>
 */
export interface FeTileElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feTile`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile#in>
   */
  in?: string | undefined;
}

/**
 * feTile renders the [`feTile`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile>
 */
export function feTile(
  props?: FeTileElementProps,
  ...children: string[]
): string {
  return renderElement("feTile", props as AnyProps, false, children);
}
