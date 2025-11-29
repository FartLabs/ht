/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { NobrElementProps } from "../../elements/nobr.ts";
import { nobr } from "../../elements/nobr.ts";

/**
 * NOBRProps are the JSX props for the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr>
 * @deprecated
 */
export type NOBRProps = NobrElementProps & { children?: string | string[] };

/**
 * NOBR renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr>
 * @deprecated
 */
export function NOBR(props?: NOBRProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return nobr(rest, ...childArray);
}
