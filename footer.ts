import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * footer renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Element/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/footer>
 */
export function footer(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("footer", props);
}
