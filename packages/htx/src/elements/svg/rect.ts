/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RectElementProps } from "@fartlabs/ht/svg/rect";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { RectElementProps };

/**
 * RECT renders the [`rect`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/rect>
 */
export function RECT(
  props?: RectElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "rect",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
