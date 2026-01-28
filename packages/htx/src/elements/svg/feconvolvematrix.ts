/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeConvolveMatrixElementProps } from "@fartlabs/ht/svg/feConvolveMatrix";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeConvolveMatrixElementProps };

/**
 * FECONVOLVEMATRIX renders the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix>
 */
export function FECONVOLVEMATRIX(
  props?: FeConvolveMatrixElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feConvolveMatrix",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
