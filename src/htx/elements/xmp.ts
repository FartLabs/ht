/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { XmpElementProps } from "../../elements/xmp.ts";
import { xmp } from "../../elements/xmp.ts";

/**
 * XMPProps are the JSX props for the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp>
 * @deprecated
 */
export type XMPProps = XmpElementProps & { children?: string | string[] };

/**
 * XMP renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp>
 * @deprecated
 */
export function XMP(props?: XMPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return xmp(rest, ...childArray);
}
