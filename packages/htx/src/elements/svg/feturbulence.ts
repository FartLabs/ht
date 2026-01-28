/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeTurbulenceElementProps } from "@fartlabs/ht/svg/feTurbulence";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeTurbulenceElementProps };

/**
 * FETURBULENCE renders the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence>
 */
export function FETURBULENCE(
  props?: FeTurbulenceElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feTurbulence",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
