import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * strike renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Element/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/strike>
 * @deprecated
 */
export function strike(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("strike", props);
}
