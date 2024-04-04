import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * sup renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Element/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/sup>
 */
export function sup(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("sup", props);
}
