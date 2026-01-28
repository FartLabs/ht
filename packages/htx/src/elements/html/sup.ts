/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SupElementProps } from "@fartlabs/ht/html/sup";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SupElementProps };

/**
 * SUP renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup>
 */
export function SUP(
  props?: SupElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "sup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
