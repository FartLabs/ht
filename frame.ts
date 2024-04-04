import { renderElement } from "./shared/mod.ts";

/**
 * FrameProps are the props for the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/frame
 */
export interface FrameProps {
  children: unknown[] | undefined;
  /** @deprecated */
  frameborder: string | undefined;
  /** @deprecated */
  marginheight: string | undefined;
  /** @deprecated */
  marginwidth: string | undefined;
  /** @deprecated */
  name: string | undefined;
  /** @deprecated */
  noresize: string | undefined;
  /** @deprecated */
  scrolling: string | undefined;
  /** @deprecated */
  src: string | undefined;
}

/** frame renders the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element. */
export function frame(props: FrameProps): string {
  return renderElement("frame", props);
}
