/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { UElementProps } from "../../elements/u.ts";
import { u } from "../../elements/u.ts";

/**
 * UProps are the JSX props for the [`u`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u>
 */
export type UProps = UElementProps & { children?: string | string[] };

/**
 * U renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u>
 */
export function U(props?: UProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return u(rest, ...childArray);
}
