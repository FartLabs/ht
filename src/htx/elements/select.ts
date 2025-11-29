/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SelectElementProps } from "../../elements/select.ts";
import { select } from "../../elements/select.ts";

/**
 * SELECTProps are the JSX props for the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export type SELECTProps = SelectElementProps & { children?: string | string[] };

/**
 * SELECT renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export function SELECT(props?: SELECTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return select(rest, ...childArray);
}
