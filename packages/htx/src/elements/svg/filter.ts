/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FilterElementProps } from "@fartlabs/ht/svg/filter";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FilterElementProps };

/**
 * FILTER renders the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter>
 */
export function FILTER(
  props?: FilterElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "filter",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
