/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H3ElementProps } from "../../elements/h3.ts";
import { h3 } from "../../elements/h3.ts";

/**
 * H3Props are the JSX props for the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export type H3Props = H3ElementProps & { children?: string | string[] };

/**
 * H3 renders the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H3(props?: H3Props): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return h3(rest, ...childArray);
}
