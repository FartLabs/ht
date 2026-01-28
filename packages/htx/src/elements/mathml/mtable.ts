/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MtableElementProps } from "@fartlabs/ht/mathml/mtable";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MtableElementProps };

/**
 * MTABLE renders the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable>
 */
export function MTABLE(
  props?: MtableElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mtable",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
