/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CanvasElementProps are the props for the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas>
 */
export interface CanvasElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas#height>
   */
  height?: string | undefined;
  /**
   * `moz-opaque` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas#moz-opaque>
   * @deprecated
   */
  "moz-opaque"?: string | undefined;
  /**
   * `width` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas#width>
   */
  width?: string | undefined;
}

/**
 * canvas renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas>
 */
export function canvas(
  props?: CanvasElementProps,
  ...children: string[]
): string {
  return renderElement("canvas", props as AnyProps, false, children);
}
