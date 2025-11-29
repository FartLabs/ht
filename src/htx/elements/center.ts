/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CenterElementProps } from "../../elements/center.ts";
import { center } from "../../elements/center.ts";

/**
 * CENTERProps are the JSX props for the [`center`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center>
 * @deprecated
 */
export type CENTERProps = CenterElementProps & { children?: string | string[] };

/**
 * CENTER renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center>
 * @deprecated
 */
export function CENTER(props?: CENTERProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return center(rest, ...childArray);
}
