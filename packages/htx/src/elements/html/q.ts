/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { QElementProps } from "@fartlabs/ht/html/q";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { QElementProps };

/**
 * Q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export function Q(
  props?: QElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "q",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
