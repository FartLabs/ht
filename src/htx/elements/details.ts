/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DetailsElementProps } from "../../elements/details.ts";
import { details } from "../../elements/details.ts";

/**
 * DETAILSProps are the JSX props for the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details>
 */
export type DETAILSProps = DetailsElementProps & {
  children?: string | string[];
};

/**
 * DETAILS renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details>
 */
export function DETAILS(props?: DETAILSProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return details(rest, ...childArray);
}
