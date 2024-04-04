import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * p renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/p>
 */
export function p(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("p", props);
}
