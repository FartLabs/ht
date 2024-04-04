import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * tt renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tt>
 * @deprecated
 */
export function tt(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("tt", props);
}
