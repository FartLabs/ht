/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AElementProps } from "../../elements/a.ts";
import { a } from "../../elements/a.ts";

/**
 * AProps are the JSX props for the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a>
 */
export type AProps = AElementProps & { children?: string | string[] };

/**
 * A renders the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a>
 */
export function A(props?: AProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return a(rest, ...childArray);
}
