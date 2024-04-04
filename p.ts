import { renderElement } from "./shared/mod.ts";

/**
 * PProps are the props for the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/p
 */
export interface PProps {
  children: unknown[] | undefined;
}

/** p renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element. */
export function p(props: PProps): string {
  return renderElement("p", props);
}
