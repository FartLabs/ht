/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BigElementProps } from "../../elements/big.ts";
import { big } from "../../elements/big.ts";

/**
 * BIGProps are the JSX props for the [`big`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big>
 * @deprecated
 */
export type BIGProps = BigElementProps & { children?: string | string[] };

/**
 * BIG renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big>
 * @deprecated
 */
export function BIG(props?: BIGProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return big(rest, ...childArray);
}
