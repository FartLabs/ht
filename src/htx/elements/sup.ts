/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SupElementProps } from "../../elements/sup.ts";
import { sup } from "../../elements/sup.ts";

/**
 * SUPProps are the JSX props for the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup>
 */
export type SUPProps = SupElementProps & { children?: string | string[] };

/**
 * SUP renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup>
 */
export function SUP(props?: SUPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return sup(rest, ...childArray);
}
