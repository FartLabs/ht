/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AudioElementProps are the props for the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export interface AudioElementProps extends GlobalAttributes {
  /**
   * `autoplay` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#autoplay>
   */
  autoplay?: string | undefined;
  /**
   * `controls` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#controls>
   */
  controls?: string | undefined;
  /**
   * `controlslist` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#controlslist>
   */
  controlslist?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `disableremoteplayback` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#disableremoteplayback>
   */
  disableremoteplayback?: string | undefined;
  /**
   * `loop` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#loop>
   */
  loop?: string | undefined;
  /**
   * `muted` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#muted>
   */
  muted?: string | undefined;
  /**
   * `preload` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#preload>
   */
  preload?: string | undefined;
  /**
   * `src` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#src>
   */
  src?: string | undefined;
}

/**
 * audio renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export function audio(
  props?: AudioElementProps,
  ...children: string[]
): string {
  return renderElement("audio", props as AnyProps, false, children);
}
