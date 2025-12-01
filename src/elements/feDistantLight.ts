/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeDistantLightElementProps are the props for the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight>
 */
export interface FeDistantLightElementProps extends GlobalAttributes {
  /**
   * `azimuth` is an attribute of the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight#azimuth>
   */
  azimuth?: string | undefined;
  /**
   * `elevation` is an attribute of the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight#elevation>
   */
  elevation?: string | undefined;
}

/**
 * feDistantLight renders the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight>
 */
export function feDistantLight(
  props?: FeDistantLightElementProps,
  ...children: string[]
): string {
  return renderElement("feDistantLight", props as AnyProps, false, children);
}
