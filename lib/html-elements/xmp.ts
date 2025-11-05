/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * XmpElementProps are the props for the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp>
 * @deprecated
 */
export interface XmpElementProps extends GlobalAttributes {
}

/**
 * xmp renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp>
 * @deprecated
 */
export function xmp(props?: XmpElementProps, ...children: string[]): string {
  return renderElement("xmp", props as AnyProps, false, children);
}
