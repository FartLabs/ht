import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * big renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Element/big) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/big>
 * @deprecated
 */
export function big(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("big", props as AnyProps, false, children);
}
