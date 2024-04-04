import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * dd renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dd>
 */
export function dd(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("dd", props);
}
