/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeTileElementProps } from "@fartlabs/ht/svg/feTile";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeTileElementProps };

/**
 * FETILE renders the [`feTile`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile>
 */
export function FETILE(
  props?: FeTileElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feTile",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
