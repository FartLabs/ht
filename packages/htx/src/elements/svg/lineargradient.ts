/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LinearGradientElementProps } from "@fartlabs/ht/svg/linearGradient";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { LinearGradientElementProps };

/**
 * LINEARGRADIENT renders the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient>
 */
export function LINEARGRADIENT(
  props?: LinearGradientElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "linearGradient",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
