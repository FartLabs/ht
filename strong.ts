import { renderElement } from "./shared/mod.ts";

/**
 * StrongProps are the props for the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/strong
 */
export interface StrongProps {
  children: unknown[] | undefined;
}

/** strong renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) element. */
export function strong(props: StrongProps): string {
  return renderElement("strong", props);
}
