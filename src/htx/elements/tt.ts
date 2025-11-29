/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TtElementProps } from "../../elements/tt.ts";
import { tt } from "../../elements/tt.ts";

/**
 * TTProps are the JSX props for the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt>
 * @deprecated
 */
export type TTProps = TtElementProps & { children?: string | string[] };

/**
 * TT renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt>
 * @deprecated
 */
export function TT(props?: TTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return tt(rest, ...childArray);
}
