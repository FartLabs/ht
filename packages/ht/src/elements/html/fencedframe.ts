/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FencedframeElementProps are the props for the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @deprecated
 */
export interface FencedframeElementProps extends GlobalAttributes {
  /**
   * `allow` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#allow>
   * @deprecated
   */
  allow?: string | undefined;
  /**
   * `height` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#height>
   * @deprecated
   */
  height?: string | undefined;
  /**
   * `width` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @deprecated
 */
export function fencedframe(
  props?: FencedframeElementProps,
  ...children: string[]
): string {
  return renderElement("fencedframe", props as AnyProps, false, children);
}
