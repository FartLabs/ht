/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { EmElementProps } from "../../elements/em.ts";
import { em } from "../../elements/em.ts";

/**
 * EMProps are the JSX props for the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export type EMProps = EmElementProps & { children?: string | string[] };

/**
 * EM renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export function EM(props?: EMProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return em(rest, ...childArray);
}
