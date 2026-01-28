/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { NobrElementProps } from "@fartlabs/ht/html/nobr";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { NobrElementProps };

/**
 * NOBR renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr>
 * @deprecated
 */
export function NOBR(
  props?: NobrElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "nobr",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
