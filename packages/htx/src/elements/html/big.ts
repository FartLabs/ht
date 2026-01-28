/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BigElementProps } from "@fartlabs/ht/html/big";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { BigElementProps };

/**
 * BIG renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big>
 * @deprecated
 */
export function BIG(
  props?: BigElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "big",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
