/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BElementProps } from "../../elements/b.ts";
import { b } from "../../elements/b.ts";

/**
 * BProps are the JSX props for the [`b`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b>
 */
export type BProps = BElementProps & { children?: string | string[] };

/**
 * B renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b>
 */
export function B(props?: BProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return b(rest, ...childArray);
}
