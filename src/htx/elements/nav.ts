/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { NavElementProps } from "../../elements/nav.ts";
import { nav } from "../../elements/nav.ts";

/**
 * NAVProps are the JSX props for the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav>
 */
export type NAVProps = NavElementProps & { children?: string | string[] };

/**
 * NAV renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav>
 */
export function NAV(props?: NAVProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return nav(rest, ...childArray);
}
