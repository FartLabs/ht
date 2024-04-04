import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * var_ renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/var>
 */
export function var_(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("var", props as AnyProps, false, children);
}
