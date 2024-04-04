import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * figure renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/figure>
 */
export function figure(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("figure", props);
}
