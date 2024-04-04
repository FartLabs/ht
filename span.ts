import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * span renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/span>
 */
export function span(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("span", props);
}
