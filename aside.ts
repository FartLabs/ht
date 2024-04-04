import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * aside renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/aside>
 */
export function aside(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("aside", props);
}
