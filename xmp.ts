import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * xmp renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Element/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/xmp>
 * @deprecated
 */
export function xmp(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("xmp", props as AnyProps, false, children);
}
