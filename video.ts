/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * VideoElementProps are the props for the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export interface VideoElementProps extends GlobalAttributes {
  /**
   * `autoplay` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#autoplay>
   */
  autoplay?: string | undefined;
  /**
   * `controls` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#controls>
   */
  controls?: string | undefined;
  /**
   * `controlslist` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#controlslist>
   */
  controlslist?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `disablepictureinpicture` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#disablepictureinpicture>
   */
  disablepictureinpicture?: string | undefined;
  /**
   * `disableremoteplayback` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#disableremoteplayback>
   */
  disableremoteplayback?: string | undefined;
  /**
   * `height` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#height>
   */
  height?: string | undefined;
  /**
   * `loop` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#loop>
   */
  loop?: string | undefined;
  /**
   * `muted` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#muted>
   */
  muted?: string | undefined;
  /**
   * `playsinline` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#playsinline>
   */
  playsinline?: string | undefined;
  /**
   * `poster` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#poster>
   */
  poster?: string | undefined;
  /**
   * `preload` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#preload>
   */
  preload?: string | undefined;
  /**
   * `src` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#src>
   */
  src?: string | undefined;
  /**
   * `width` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#width>
   */
  width?: string | undefined;
}

/**
 * video renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export function video(
  props?: VideoElementProps,
  ...children: string[]
): string {
  return renderElement("video", props as AnyProps, false, children);
}
