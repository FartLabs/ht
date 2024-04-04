import { renderElement } from "./shared/mod.ts";

/**
 * VideoProps are the props for the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/video
 */
export interface VideoProps {
  children: unknown[] | undefined;
  aspect_ratio_computed_from_attributes: string | undefined;
  autoplay: string | undefined;
  controls: string | undefined;
  controlslist: string | undefined;
  crossorigin: string | undefined;
  disablepictureinpicture: string | undefined;
  disableremoteplayback: string | undefined;
  height: string | undefined;
  loop: string | undefined;
  muted: string | undefined;
  playsinline: string | undefined;
  poster: string | undefined;
  preload: string | undefined;
  src: string | undefined;
  width: string | undefined;
}

/** video renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element. */
export function video(props: VideoProps): string {
  return renderElement("video", props);
}
