/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { XmpElementProps } from "@fartlabs/ht/html/xmp";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { XmpElementProps };

/**
 * XMP renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp>
 * @deprecated
 */
export function XMP(
  props?: XmpElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "xmp",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
