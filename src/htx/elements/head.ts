/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HeadElementProps } from "../../elements/head.ts";
import { head } from "../../elements/head.ts";

/**
 * HEADProps are the JSX props for the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export type HEADProps = HeadElementProps & { children?: string | string[] };

/**
 * HEAD renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export function HEAD(props?: HEADProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return head(rest, ...childArray);
}
