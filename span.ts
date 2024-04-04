import { renderElement } from "./shared/mod.ts";

/**
 * SpanProps are the props for the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/span
 */
export interface SpanProps {
  children: unknown[] | undefined;
}

/** span renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element. */
export function span(props: SpanProps): string {
  return renderElement("span", props);
}
