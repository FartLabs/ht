/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnimateElementProps } from "@fartlabs/ht/svg/animate";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AnimateElementProps };

/**
 * ANIMATE renders the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate>
 */
export function ANIMATE(
  props?: AnimateElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "animate",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
