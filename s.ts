import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * s renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/s>
 */
export function s(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("s", props as AnyProps, false, children);
}
