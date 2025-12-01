/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeMorphologyElementProps are the props for the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology>
 */
export interface FeMorphologyElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology#in>
   */
  in?: string | undefined;
  /**
   * `operator` is an attribute of the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology#operator>
   */
  operator?: string | undefined;
  /**
   * `radius` is an attribute of the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology#radius>
   */
  radius?: string | undefined;
}

/**
 * feMorphology renders the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology>
 */
export function feMorphology(
  props?: FeMorphologyElementProps,
  ...children: string[]
): string {
  return renderElement("feMorphology", props as AnyProps, false, children);
}
