/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeMergeElementProps } from "@fartlabs/ht/svg/feMerge";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeMergeElementProps };

/**
 * FEMERGE renders the [`feMerge`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMerge) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMerge>
 */
export function FEMERGE(
  props?: FeMergeElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feMerge",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
