/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeFuncBElementProps } from "@fartlabs/ht/svg/feFuncB";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeFuncBElementProps };

/**
 * FEFUNCB renders the [`feFuncB`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB>
 */
export function FEFUNCB(
  props?: FeFuncBElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFuncB",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
