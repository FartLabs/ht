/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeSpecularLightingElementProps } from "@fartlabs/ht/svg/feSpecularLighting";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeSpecularLightingElementProps };

/**
 * FESPECULARLIGHTING renders the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting>
 */
export function FESPECULARLIGHTING(
  props?: FeSpecularLightingElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feSpecularLighting",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
