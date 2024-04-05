import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * XmpElementProps are the props for the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Element/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/xmp>
 * @deprecated
 */
export type XmpElementProps = GlobalAttributes;

/**
 * xmp renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Element/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/xmp>
 * @deprecated
 */
export function xmp(props?: XmpElementProps, ...children: string[]): string {
  return renderElement("xmp", props as AnyProps, false, children);
}
