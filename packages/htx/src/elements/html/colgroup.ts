/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ColgroupElementProps } from "@fartlabs/ht/html/colgroup";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ColgroupElementProps };

/**
 * COLGROUP renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup>
 */
export function COLGROUP(
  props?: ColgroupElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "colgroup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
