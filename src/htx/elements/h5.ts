/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H5ElementProps } from "../../elements/h5.ts";
import { h5 } from "../../elements/h5.ts";

/**
 * H5Props are the JSX props for the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export type H5Props = H5ElementProps & { children?: string | string[] };

/**
 * H5 renders the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H5(props?: H5Props): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return h5(rest, ...childArray);
}
