import { renderElement } from "./shared/mod.ts";

/**
 * DetailsProps are the props for the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/details
 */
export interface DetailsProps {
  children: unknown[] | undefined;
  name: string | undefined;
  open: string | undefined;
}

/** details renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element. */
export function details(props: DetailsProps): string {
  return renderElement("details", props);
}
