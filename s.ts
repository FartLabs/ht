import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * s renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/s>
 */
export function s(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("s", props);
}
