/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SummaryElementProps } from "../../elements/summary.ts";
import { summary } from "../../elements/summary.ts";

/**
 * SUMMARYProps are the JSX props for the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export type SUMMARYProps = SummaryElementProps & {
  children?: string | string[];
};

/**
 * SUMMARY renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export function SUMMARY(props?: SUMMARYProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return summary(rest, ...childArray);
}
