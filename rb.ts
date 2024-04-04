import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * rb renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rb>
 * @deprecated
 */
export function rb(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("rb", props);
}
