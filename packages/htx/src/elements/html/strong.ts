/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { StrongElementProps } from "@fartlabs/ht/html/strong";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { StrongElementProps };

/**
 * STRONG renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong>
 */
export function STRONG(
  props?: StrongElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "strong",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
