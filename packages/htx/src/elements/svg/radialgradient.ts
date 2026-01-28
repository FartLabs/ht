/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RadialGradientElementProps } from "@fartlabs/ht/svg/radialGradient";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { RadialGradientElementProps };

/**
 * RADIALGRADIENT renders the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient>
 */
export function RADIALGRADIENT(
  props?: RadialGradientElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "radialGradient",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
