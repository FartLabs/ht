import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * cite renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/cite>
 */
export function cite(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("cite", props);
}
