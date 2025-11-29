/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DdElementProps } from "../../elements/dd.ts";
import { dd } from "../../elements/dd.ts";

/**
 * DDProps are the JSX props for the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export type DDProps = DdElementProps & { children?: string | string[] };

/**
 * DD renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export function DD(props?: DDProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return dd(rest, ...childArray);
}
