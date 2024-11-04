/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FrameElementProps are the props for the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame>
 * @deprecated
 */
export interface FrameElementProps extends GlobalAttributes {
  /**
   * `frameborder` is an attribute of the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame#frameborder>
   * @deprecated
   */
  frameborder?: string | undefined;
  /**
   * `marginheight` is an attribute of the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame#marginheight>
   * @deprecated
   */
  marginheight?: string | undefined;
  /**
   * `marginwidth` is an attribute of the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame#marginwidth>
   * @deprecated
   */
  marginwidth?: string | undefined;
  /**
   * `name` is an attribute of the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `noresize` is an attribute of the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame#noresize>
   * @deprecated
   */
  noresize?: string | undefined;
  /**
   * `scrolling` is an attribute of the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame#scrolling>
   * @deprecated
   */
  scrolling?: string | undefined;
  /**
   * `src` is an attribute of the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame#src>
   * @deprecated
   */
  src?: string | undefined;
}

/**
 * frame renders the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame>
 * @deprecated
 */
export function frame(
  props?: FrameElementProps,
  ...children: string[]
): string {
  return renderElement("frame", props as AnyProps, false, children);
}
