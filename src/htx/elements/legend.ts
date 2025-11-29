/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LegendElementProps } from "../../elements/legend.ts";
import { legend } from "../../elements/legend.ts";

/**
 * LEGENDProps are the JSX props for the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend>
 */
export type LEGENDProps = LegendElementProps & { children?: string | string[] };

/**
 * LEGEND renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend>
 */
export function LEGEND(props?: LEGENDProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return legend(rest, ...childArray);
}
