import { renderElement } from "./shared/mod.ts";

/**
 * SupProps are the props for the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Element/sup) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/sup
 */
export interface SupProps {
  children: unknown[] | undefined;
}

/** sup renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Element/sup) element. */
export function sup(props: SupProps): string {
  return renderElement("sup", props);
}
