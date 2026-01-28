/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnimateTransformElementProps } from "@fartlabs/ht/svg/animateTransform";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AnimateTransformElementProps };

/**
 * ANIMATETRANSFORM renders the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform>
 */
export function ANIMATETRANSFORM(
  props?: AnimateTransformElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "animateTransform",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
