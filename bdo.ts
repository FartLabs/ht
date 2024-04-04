import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * bdo renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdo>
 */
export function bdo(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("bdo", props);
}
