/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TrElementProps } from "../../elements/tr.ts";
import { tr } from "../../elements/tr.ts";

/**
 * TRProps are the JSX props for the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export type TRProps = TrElementProps & { children?: string | string[] };

/**
 * TR renders the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export function TR(props?: TRProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return tr(rest, ...childArray);
}
