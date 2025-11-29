/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TdElementProps } from "../../elements/td.ts";
import { td } from "../../elements/td.ts";

/**
 * TDProps are the JSX props for the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td>
 */
export type TDProps = TdElementProps & { children?: string | string[] };

/**
 * TD renders the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td>
 */
export function TD(props?: TDProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return td(rest, ...childArray);
}
