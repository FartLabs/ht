/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DfnElementProps } from "../../elements/dfn.ts";
import { dfn } from "../../elements/dfn.ts";

/**
 * DFNProps are the JSX props for the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export type DFNProps = DfnElementProps & { children?: string | string[] };

/**
 * DFN renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export function DFN(props?: DFNProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return dfn(rest, ...childArray);
}
