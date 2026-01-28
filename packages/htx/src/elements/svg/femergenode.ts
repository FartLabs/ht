/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeMergeNodeElementProps } from "@fartlabs/ht/svg/feMergeNode";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeMergeNodeElementProps };

/**
 * FEMERGENODE renders the [`feMergeNode`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode>
 */
export function FEMERGENODE(
  props?: FeMergeNodeElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feMergeNode",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
