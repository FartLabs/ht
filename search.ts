import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * search renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/search>
 */
export function search(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("search", props as AnyProps, false, children);
}
