import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * em renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/em>
 */
export function em(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("em", props);
}
