/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H6ElementProps } from "../../elements/h6.ts";
import { h6 } from "../../elements/h6.ts";

/**
 * H6Props are the JSX props for the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export type H6Props = H6ElementProps & { children?: string | string[] };

/**
 * H6 renders the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H6(props?: H6Props): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return h6(rest, ...childArray);
}
