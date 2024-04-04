import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * title renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Element/title) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/title>
 */
export function title(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("title", props);
}
