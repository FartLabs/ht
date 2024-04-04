import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * VideoProps are the props for the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video>
 */
export interface VideoProps extends GlobalAttributes {
  autoplay?: string | undefined;
  controls?: string | undefined;
  controlslist?: string | undefined;
  crossorigin?: string | undefined;
  disablepictureinpicture?: string | undefined;
  disableremoteplayback?: string | undefined;
  height?: string | undefined;
  loop?: string | undefined;
  muted?: string | undefined;
  playsinline?: string | undefined;
  poster?: string | undefined;
  preload?: string | undefined;
  src?: string | undefined;
  width?: string | undefined;
}

/**
 * video renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video>
 */
export function video(props?: VideoProps & ChildrenProps): string {
  return renderElement("video", props);
}
