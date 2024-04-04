import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * mark renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/mark>
 */
export function mark(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("mark", props as AnyProps, false, children);
}
