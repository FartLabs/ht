/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CircleElementProps } from "@fartlabs/ht/svg/circle";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { CircleElementProps };

/**
 * CIRCLE renders the [`circle`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/circle>
 */
export function CIRCLE(
  props?: CircleElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "circle",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
