import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * hgroup renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/hgroup>
 */
export function hgroup(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("hgroup", props);
}
