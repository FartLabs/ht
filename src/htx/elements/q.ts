/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { QElementProps } from "../../elements/q.ts";
import { q } from "../../elements/q.ts";

/**
 * QProps are the JSX props for the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export type QProps = QElementProps & { children?: string | string[] };

/**
 * Q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export function Q(props?: QProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return q(rest, ...childArray);
}
