import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * VideoElementProps are the props for the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video>
 */
export interface VideoElementProps extends GlobalAttributes {
  /** `autoplay` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  autoplay?: string | undefined;
  /** `controls` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  controls?: string | undefined;
  /** `controlslist` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  controlslist?: string | undefined;
  /** `crossorigin` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  crossorigin?: string | undefined;
  /** `disablepictureinpicture` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  disablepictureinpicture?: string | undefined;
  /** `disableremoteplayback` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  disableremoteplayback?: string | undefined;
  /** `height` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  height?: string | undefined;
  /** `loop` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  loop?: string | undefined;
  /** `muted` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  muted?: string | undefined;
  /** `playsinline` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  playsinline?: string | undefined;
  /** `poster` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  poster?: string | undefined;
  /** `preload` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  preload?: string | undefined;
  /** `src` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
  src?: string | undefined;
  /** `width` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
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
