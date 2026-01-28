/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeDiffuseLightingElementProps } from "@fartlabs/ht/svg/feDiffuseLighting";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeDiffuseLightingElementProps };

/**
 * FEDIFFUSELIGHTING renders the [`feDiffuseLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting>
 */
export function FEDIFFUSELIGHTING(
  props?: FeDiffuseLightingElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDiffuseLighting",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
