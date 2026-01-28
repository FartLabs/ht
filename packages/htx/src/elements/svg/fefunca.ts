/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeFuncAElementProps } from "@fartlabs/ht/svg/feFuncA";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeFuncAElementProps };

/**
 * FEFUNCA renders the [`feFuncA`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA>
 */
export function FEFUNCA(
  props?: FeFuncAElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFuncA",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
