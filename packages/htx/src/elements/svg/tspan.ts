/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TspanElementProps } from "@fartlabs/ht/svg/tspan";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TspanElementProps };

/**
 * TSPAN renders the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan>
 */
export function TSPAN(
  props?: TspanElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tspan",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
