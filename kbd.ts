import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * kbd renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/kbd>
 */
export function kbd(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("kbd", props as AnyProps, false, children);
}
