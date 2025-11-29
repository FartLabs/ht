/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BdoElementProps } from "../../elements/bdo.ts";
import { bdo } from "../../elements/bdo.ts";

/**
 * BDOProps are the JSX props for the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export type BDOProps = BdoElementProps & { children?: string | string[] };

/**
 * BDO renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export function BDO(props?: BDOProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return bdo(rest, ...childArray);
}
