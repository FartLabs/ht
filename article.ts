import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * article renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/article>
 */
export function article(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("article", props as AnyProps, false, children);
}
