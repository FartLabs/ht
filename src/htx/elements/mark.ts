/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MarkElementProps } from "../../elements/mark.ts";
import { mark } from "../../elements/mark.ts";

/**
 * MARKProps are the JSX props for the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export type MARKProps = MarkElementProps & { children?: string | string[] };

/**
 * MARK renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export function MARK(props?: MARKProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return mark(rest, ...childArray);
}
