/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PolylineElementProps } from "@fartlabs/ht/svg/polyline";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { PolylineElementProps };

/**
 * POLYLINE renders the [`polyline`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polyline>
 */
export function POLYLINE(
  props?: PolylineElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "polyline",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
