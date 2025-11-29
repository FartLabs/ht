/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H2ElementProps } from "../../elements/h2.ts";
import { h2 } from "../../elements/h2.ts";

/**
 * H2Props are the JSX props for the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export type H2Props = H2ElementProps & { children?: string | string[] };

/**
 * H2 renders the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H2(props?: H2Props): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return h2(rest, ...childArray);
}
