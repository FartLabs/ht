/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PreElementProps } from "../../elements/pre.ts";
import { pre } from "../../elements/pre.ts";

/**
 * PREProps are the JSX props for the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre>
 */
export type PREProps = PreElementProps & { children?: string | string[] };

/**
 * PRE renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre>
 */
export function PRE(props?: PREProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return pre(rest, ...childArray);
}
