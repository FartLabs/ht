import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * noscript renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Element/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noscript>
 */
export function noscript(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("noscript", props as AnyProps, false, children);
}
