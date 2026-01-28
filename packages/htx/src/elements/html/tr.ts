/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TrElementProps } from "@fartlabs/ht/html/tr";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TrElementProps };

/**
 * TR renders the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export function TR(
  props?: TrElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tr",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
