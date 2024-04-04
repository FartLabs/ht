import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * rp renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rp>
 */
export function rp(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("rp", props as AnyProps, false, children);
}
