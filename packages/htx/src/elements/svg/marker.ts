/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MarkerElementProps } from "@fartlabs/ht/svg/marker";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MarkerElementProps };

/**
 * MARKER renders the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker>
 */
export function MARKER(
  props?: MarkerElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "marker",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
