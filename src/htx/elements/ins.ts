/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { InsElementProps } from "../../elements/ins.ts";
import { ins } from "../../elements/ins.ts";

/**
 * INSProps are the JSX props for the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export type INSProps = InsElementProps & { children?: string | string[] };

/**
 * INS renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export function INS(props?: INSProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return ins(rest, ...childArray);
}
