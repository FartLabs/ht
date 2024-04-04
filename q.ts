import { renderElement } from "./shared/mod.ts";

/**
 * QProps are the props for the [`q`](https://developer.mozilla.org/docs/Web/HTML/Element/q) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/q
 */
export interface QProps {
  children: unknown[] | undefined;
  cite: string | undefined;
}

/** q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Element/q) element. */
export function q(props: QProps): string {
  return renderElement("q", props);
}
