import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * section renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Element/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/section>
 */
export function section(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("section", props as AnyProps, false, children);
}
