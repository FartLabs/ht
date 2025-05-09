/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FencedframeElementProps are the props for the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export interface FencedframeElementProps extends GlobalAttributes {
  /**
   * `allow` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#allow>
   * @experimental
   */
  allow?: string | undefined;
  /**
   * `height` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#height>
   * @experimental
   */
  height?: string | undefined;
  /**
   * `width` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#width>
   * @experimental
   */
  width?: string | undefined;
}

/**
 * fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export function fencedframe(
  props?: FencedframeElementProps,
  ...children: string[]
): string {
  return renderElement("fencedframe", props as AnyProps, false, children);
}
