import { renderElement } from "./shared/mod.ts";

/**
 * FramesetProps are the props for the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/frameset
 */
export interface FramesetProps {
  children: unknown[] | undefined;
  /** @deprecated */
  cols: string | undefined;
  /** @deprecated */
  rows: string | undefined;
}

/** frameset renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element. */
export function frameset(props: FramesetProps): string {
  return renderElement("frameset", props);
}
