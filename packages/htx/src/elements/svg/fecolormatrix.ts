/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeColorMatrixElementProps } from "@fartlabs/ht/svg/feColorMatrix";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeColorMatrixElementProps };

/**
 * FECOLORMATRIX renders the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix>
 */
export function FECOLORMATRIX(
  props?: FeColorMatrixElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feColorMatrix",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
