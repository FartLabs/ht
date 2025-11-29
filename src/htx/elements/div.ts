/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DivElementProps } from "../../elements/div.ts";
import { div } from "../../elements/div.ts";

/**
 * DIVProps are the JSX props for the [`div`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div>
 */
export type DIVProps = DivElementProps & { children?: string | string[] };

/**
 * DIV renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div>
 */
export function DIV(props?: DIVProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return div(rest, ...childArray);
}
