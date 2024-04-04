import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * small renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/small>
 */
export function small(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("small", props as AnyProps, false, children);
}
