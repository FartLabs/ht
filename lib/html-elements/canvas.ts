/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * CanvasElementProps are the props for the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export interface CanvasElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas#height>
   */
  height?: string | undefined;
  /**
   * `moz-opaque` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas#moz-opaque>
   * @deprecated
   */
  "moz-opaque"?: string | undefined;
  /**
   * `width` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas#width>
   */
  width?: string | undefined;
}

/**
 * canvas renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export function canvas(
  props?: CanvasElementProps,
  ...children: string[]
): string {
  return renderElement("canvas", props as AnyProps, false, children);
}
