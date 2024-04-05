import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * PElementProps are the props for the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/p>
 */
export type PElementProps = GlobalAttributes;

/**
 * p renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/p>
 */
export function p(props?: PElementProps, ...children: string[]): string {
  return renderElement("p", props as AnyProps, false, children);
}
