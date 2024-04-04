import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * dfn renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dfn>
 */
export function dfn(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("dfn", props);
}
