/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MtdElementProps } from "@fartlabs/ht/mathml/mtd";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MtdElementProps };

/**
 * MTD renders the [`mtd`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd>
 */
export function MTD(
  props?: MtdElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mtd",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
