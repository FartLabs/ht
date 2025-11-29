/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TfootElementProps } from "../../elements/tfoot.ts";
import { tfoot } from "../../elements/tfoot.ts";

/**
 * TFOOTProps are the JSX props for the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot>
 */
export type TFOOTProps = TfootElementProps & { children?: string | string[] };

/**
 * TFOOT renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot>
 */
export function TFOOT(props?: TFOOTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return tfoot(rest, ...childArray);
}
