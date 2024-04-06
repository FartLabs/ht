import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * StrongElementProps are the props for the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/strong>
 */
export interface StrongElementProps extends GlobalAttributes {
}

/**
 * strong renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/strong>
 */
export function strong(
  props?: StrongElementProps,
  ...children: string[]
): string {
  return renderElement("strong", props as AnyProps, false, children);
}
