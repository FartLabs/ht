/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MathElementProps } from "@fartlabs/ht/mathml/math";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MathElementProps };

/**
 * MATH renders the [`math`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/math>
 */
export function MATH(
  props?: MathElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "math",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
