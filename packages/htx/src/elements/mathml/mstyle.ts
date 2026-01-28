/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MstyleElementProps } from "@fartlabs/ht/mathml/mstyle";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MstyleElementProps };

/**
 * MSTYLE renders the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle>
 */
export function MSTYLE(
  props?: MstyleElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mstyle",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
