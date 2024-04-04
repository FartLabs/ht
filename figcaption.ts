import { renderElement } from "./shared/mod.ts";

/**
 * FigcaptionProps are the props for the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Element/figcaption) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/figcaption
 */
export interface FigcaptionProps {
  children: unknown[] | undefined;
}

/** figcaption renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Element/figcaption) element. */
export function figcaption(props: FigcaptionProps): string {
  return renderElement("figcaption", props);
}
