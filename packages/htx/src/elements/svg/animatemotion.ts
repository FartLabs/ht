/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnimateMotionElementProps } from "@fartlabs/ht/svg/animateMotion";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AnimateMotionElementProps };

/**
 * ANIMATEMOTION renders the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion>
 */
export function ANIMATEMOTION(
  props?: AnimateMotionElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "animateMotion",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
