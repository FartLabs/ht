import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * i renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/i>
 */
export function i(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("i", props);
}
