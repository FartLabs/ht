import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * code renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/code>
 */
export function code(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("code", props);
}
