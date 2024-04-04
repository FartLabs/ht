import { renderElement } from "./shared/mod.ts";

/**
 * CenterProps are the props for the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/center
 */
export interface CenterProps {
  children: unknown[] | undefined;
}

/** center renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element. */
export function center(props: CenterProps): string {
  return renderElement("center", props);
}
