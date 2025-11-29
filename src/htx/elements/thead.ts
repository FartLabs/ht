/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TheadElementProps } from "../../elements/thead.ts";
import { thead } from "../../elements/thead.ts";

/**
 * THEADProps are the JSX props for the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export type THEADProps = TheadElementProps & { children?: string | string[] };

/**
 * THEAD renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export function THEAD(props?: THEADProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return thead(rest, ...childArray);
}
