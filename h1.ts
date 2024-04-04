import { renderElement } from "./shared/mod.ts";

/**
 * H1Props are the props for the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 */
export interface H1Props {
  children: unknown[] | undefined;
}

/** h1 renders the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h1(props: H1Props): string {
  return renderElement("h1", props);
}
