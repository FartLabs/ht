import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * dl renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dl>
 */
export function dl(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("dl", props as AnyProps, false, children);
}
