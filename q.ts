import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * QProps are the props for the [`q`](https://developer.mozilla.org/docs/Web/HTML/Element/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/q>
 */
export interface QProps extends GlobalAttributes {
  cite?: string | undefined;
}

/**
 * q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Element/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/q>
 */
export function q(props?: QProps, ...children: string[]): string {
  return renderElement("q", props as AnyProps, false, children);
}
