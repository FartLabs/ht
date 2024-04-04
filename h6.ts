import { renderElement } from "./shared/mod.ts";

/**
 * H6Props are the props for the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 */
export interface H6Props {
  children: unknown[] | undefined;
}

/** h6 renders the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h6(props: H6Props): string {
  return renderElement("h6", props);
}
