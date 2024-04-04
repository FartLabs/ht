import { renderElement } from "./shared/mod.ts";

/**
 * EmProps are the props for the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/em
 */
export interface EmProps {
  children: unknown[] | undefined;
}

/** em renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element. */
export function em(props: EmProps): string {
  return renderElement("em", props);
}
