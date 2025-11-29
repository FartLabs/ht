/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DelElementProps } from "../../elements/del.ts";
import { del } from "../../elements/del.ts";

/**
 * DELProps are the JSX props for the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del>
 */
export type DELProps = DelElementProps & { children?: string | string[] };

/**
 * DEL renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del>
 */
export function DEL(props?: DELProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return del(rest, ...childArray);
}
