/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PElementProps } from "../../elements/p.ts";
import { p } from "../../elements/p.ts";

/**
 * PProps are the JSX props for the [`p`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p>
 */
export type PProps = PElementProps & { children?: string | string[] };

/**
 * P renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p>
 */
export function P(props?: PProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return p(rest, ...childArray);
}
