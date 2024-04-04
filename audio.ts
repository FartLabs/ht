import { renderElement } from "./shared/mod.ts";

/**
 * AudioProps are the props for the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/audio
 */
export interface AudioProps {
  children: unknown[] | undefined;
  autoplay: string | undefined;
  controls: string | undefined;
  controlslist: string | undefined;
  crossorigin: string | undefined;
  disableremoteplayback: string | undefined;
  loop: string | undefined;
  muted: string | undefined;
  preload: string | undefined;
  src: string | undefined;
}

/** audio renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element. */
export function audio(props: AudioProps): string {
  return renderElement("audio", props);
}
