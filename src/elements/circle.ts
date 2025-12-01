/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * CircleElementProps are the props for the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle>
 */
export interface CircleElementProps extends GlobalAttributes {
  /**
   * `cx` is an attribute of the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle#cx>
   */
  cx?: string | undefined;
  /**
   * `cy` is an attribute of the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle#cy>
   */
  cy?: string | undefined;
  /**
   * `fill` is an attribute of the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle#fill>
   */
  fill?: string | undefined;
  /**
   * `r` is an attribute of the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle#r>
   */
  r?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * circle renders the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle>
 */
export function circle(
  props?: CircleElementProps,
  ...children: string[]
): string {
  return renderElement("circle", props as AnyProps, false, children);
}
