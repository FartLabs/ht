/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeTurbulenceElementProps are the props for the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence>
 */
export interface FeTurbulenceElementProps extends GlobalAttributes {
  /**
   * `baseFrequency` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#baseFrequency>
   */
  baseFrequency?: string | undefined;
  /**
   * `numOctaves` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#numOctaves>
   */
  numOctaves?: string | undefined;
  /**
   * `seed` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#seed>
   */
  seed?: string | undefined;
  /**
   * `stitchTiles` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#stitchTiles>
   */
  stitchTiles?: string | undefined;
  /**
   * `type` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#type>
   */
  type?: string | undefined;
}

/**
 * feTurbulence renders the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence>
 */
export function feTurbulence(
  props?: FeTurbulenceElementProps,
  ...children: string[]
): string {
  return renderElement("feTurbulence", props as AnyProps, false, children);
}
