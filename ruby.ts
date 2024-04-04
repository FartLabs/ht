import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ruby renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ruby>
 */
export function ruby(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("ruby", props as AnyProps, false, children);
}
