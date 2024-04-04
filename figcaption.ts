import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * figcaption renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Element/figcaption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/figcaption>
 */
export function figcaption(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("figcaption", props);
}
