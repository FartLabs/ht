/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ThElementProps } from "../../elements/th.ts";
import { th } from "../../elements/th.ts";

/**
 * THProps are the JSX props for the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th>
 */
export type THProps = ThElementProps & { children?: string | string[] };

/**
 * TH renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th>
 */
export function TH(props?: THProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return th(rest, ...childArray);
}
