import { renderElement } from "./shared/mod.ts";

/**
 * H5Props are the props for the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 */
export interface H5Props {
  children: unknown[] | undefined;
}

/** h5 renders the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h5(props: H5Props): string {
  return renderElement("h5", props);
}
