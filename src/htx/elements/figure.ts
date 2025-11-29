/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FigureElementProps } from "../../elements/figure.ts";
import { figure } from "../../elements/figure.ts";

/**
 * FIGUREProps are the JSX props for the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure>
 */
export type FIGUREProps = FigureElementProps & { children?: string | string[] };

/**
 * FIGURE renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure>
 */
export function FIGURE(props?: FIGUREProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return figure(rest, ...childArray);
}
