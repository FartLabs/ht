import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * datalist renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/datalist>
 */
export function datalist(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("datalist", props);
}
