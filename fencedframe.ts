import { renderElement } from "./shared/mod.ts";

/**
 * FencedframeProps are the props for the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe
 */
export interface FencedframeProps {
  children: unknown[] | undefined;
}

/** fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element. */
export function fencedframe(props: FencedframeProps): string {
  return renderElement("fencedframe", props);
}
