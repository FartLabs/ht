/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H4ElementProps } from "../../elements/h4.ts";
import { h4 } from "../../elements/h4.ts";

/**
 * H4Props are the JSX props for the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export type H4Props = H4ElementProps & { children?: string | string[] };

/**
 * H4 renders the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H4(props?: H4Props): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return h4(rest, ...childArray);
}
