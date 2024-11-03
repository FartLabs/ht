/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AudioElementProps are the props for the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/audio>
 */
export interface AudioElementProps extends GlobalAttributes {
  /** `autoplay` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  autoplay?: string | undefined;
  /** `controls` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  controls?: string | undefined;
  /** `controlslist` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  controlslist?: string | undefined;
  /** `crossorigin` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  crossorigin?: string | undefined;
  /** `disableremoteplayback` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  disableremoteplayback?: string | undefined;
  /** `loop` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  loop?: string | undefined;
  /** `muted` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  muted?: string | undefined;
  /** `preload` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  preload?: string | undefined;
  /** `src` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
  src?: string | undefined;
}

/**
 * audio renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/audio>
 */
export function audio(
  props?: AudioElementProps,
  ...children: string[]
): string {
  return renderElement("audio", props as AnyProps, false, children);
}
