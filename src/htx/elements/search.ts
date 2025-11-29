/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SearchElementProps } from "../../elements/search.ts";
import { search } from "../../elements/search.ts";

/**
 * SEARCHProps are the JSX props for the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export type SEARCHProps = SearchElementProps & { children?: string | string[] };

/**
 * SEARCH renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export function SEARCH(props?: SEARCHProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return search(rest, ...childArray);
}
