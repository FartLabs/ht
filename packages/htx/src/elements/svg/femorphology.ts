/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeMorphologyElementProps } from "@fartlabs/ht/svg/feMorphology";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeMorphologyElementProps };

/**
 * FEMORPHOLOGY renders the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology>
 */
export function FEMORPHOLOGY(
  props?: FeMorphologyElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feMorphology",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
