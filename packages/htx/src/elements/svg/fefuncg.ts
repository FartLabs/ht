/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeFuncGElementProps } from "@fartlabs/ht/svg/feFuncG";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeFuncGElementProps };

/**
 * FEFUNCG renders the [`feFuncG`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG>
 */
export function FEFUNCG(
  props?: FeFuncGElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFuncG",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
