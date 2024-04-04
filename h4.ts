import { renderElement } from "./shared/mod.ts";

/**
 * H4Props are the props for the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 */
export interface H4Props {
  children: unknown[] | undefined;
}

/** h4 renders the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h4(props: H4Props): string {
  return renderElement("h4", props);
}
