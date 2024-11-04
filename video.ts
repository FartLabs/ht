/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * VideoElementProps are the props for the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video>
 */
export interface VideoElementProps extends GlobalAttributes {
  /**
   * `autoplay` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#autoplay>
   */
  autoplay?: string | undefined;
  /**
   * `controls` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#controls>
   */
  controls?: string | undefined;
  /**
   * `controlslist` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#controlslist>
   */
  controlslist?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `disablepictureinpicture` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#disablepictureinpicture>
   */
  disablepictureinpicture?: string | undefined;
  /**
   * `disableremoteplayback` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#disableremoteplayback>
   */
  disableremoteplayback?: string | undefined;
  /**
   * `height` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#height>
   */
  height?: string | undefined;
  /**
   * `loop` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#loop>
   */
  loop?: string | undefined;
  /**
   * `muted` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#muted>
   */
  muted?: string | undefined;
  /**
   * `playsinline` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#playsinline>
   */
  playsinline?: string | undefined;
  /**
   * `poster` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#poster>
   */
  poster?: string | undefined;
  /**
   * `preload` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#preload>
   */
  preload?: string | undefined;
  /**
   * `src` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#src>
   */
  src?: string | undefined;
  /**
   * `width` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video#width>
   */
  width?: string | undefined;
}

/**
 * video renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video>
 */
export function video(
  props?: VideoElementProps,
  ...children: string[]
): string {
  return renderElement("video", props as AnyProps, false, children);
}
