/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DtElementProps } from "../../elements/dt.ts";
import { dt } from "../../elements/dt.ts";

/**
 * DTProps are the JSX props for the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt>
 */
export type DTProps = DtElementProps & { children?: string | string[] };

/**
 * DT renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt>
 */
export function DT(props?: DTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return dt(rest, ...childArray);
}
