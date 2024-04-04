import { renderElement } from "./shared/mod.ts";

/**
 * H2Props are the props for the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 */
export interface H2Props {
  children: unknown[] | undefined;
}

/** h2 renders the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h2(props: H2Props): string {
  return renderElement("h2", props);
}
