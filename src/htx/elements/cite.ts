/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CiteElementProps } from "../../elements/cite.ts";
import { cite } from "../../elements/cite.ts";

/**
 * CITEProps are the JSX props for the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite>
 */
export type CITEProps = CiteElementProps & { children?: string | string[] };

/**
 * CITE renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite>
 */
export function CITE(props?: CITEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return cite(rest, ...childArray);
}
