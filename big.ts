import { renderElement } from "./shared/mod.ts";

/**
 * BigProps are the props for the [`big`](https://developer.mozilla.org/docs/Web/HTML/Element/big) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/big
 */
export interface BigProps {
  children: unknown[] | undefined;
}

/** big renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Element/big) element. */
export function big(props: BigProps): string {
  return renderElement("big", props);
}
