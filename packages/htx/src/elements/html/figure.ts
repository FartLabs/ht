/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FigureElementProps } from "@fartlabs/ht/html/figure";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FigureElementProps };

/**
 * FIGURE renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure>
 */
export function FIGURE(
  props?: FigureElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "figure",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
