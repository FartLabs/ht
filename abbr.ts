import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * abbr renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/abbr>
 */
export function abbr(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("abbr", props as AnyProps, false, children);
}
