/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ColgroupElementProps } from "../../elements/colgroup.ts";
import { colgroup } from "../../elements/colgroup.ts";

/**
 * COLGROUPProps are the JSX props for the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup>
 */
export type COLGROUPProps = ColgroupElementProps & {
  children?: string | string[];
};

/**
 * COLGROUP renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup>
 */
export function COLGROUP(props?: COLGROUPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return colgroup(rest, ...childArray);
}
