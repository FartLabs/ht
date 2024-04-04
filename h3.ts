import { renderElement } from "./shared/mod.ts";

/**
 * H3Props are the props for the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 */
export interface H3Props {
  children: unknown[] | undefined;
}

/** h3 renders the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h3(props: H3Props): string {
  return renderElement("h3", props);
}
