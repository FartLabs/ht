/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { VarElementProps } from "../../elements/var.ts";
import { var_ } from "../../elements/var.ts";

/**
 * VAR_Props are the JSX props for the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export type VAR_Props = VarElementProps & { children?: string | string[] };

/**
 * VAR_ renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export function VAR_(props?: VAR_Props): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return var_(rest, ...childArray);
}
