/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H1ElementProps } from "../../elements/h1.ts";
import { h1 } from "../../elements/h1.ts";

/**
 * H1Props are the JSX props for the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export type H1Props = H1ElementProps & { children?: string | string[] };

/**
 * H1 renders the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H1(props?: H1Props): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return h1(rest, ...childArray);
}
