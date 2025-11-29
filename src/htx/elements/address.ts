/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AddressElementProps } from "../../elements/address.ts";
import { address } from "../../elements/address.ts";

/**
 * ADDRESSProps are the JSX props for the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export type ADDRESSProps = AddressElementProps & {
  children?: string | string[];
};

/**
 * ADDRESS renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export function ADDRESS(props?: ADDRESSProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return address(rest, ...childArray);
}
