/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SElementProps } from "../../elements/s.ts";
import { s } from "../../elements/s.ts";

/**
 * SProps are the JSX props for the [`s`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s>
 */
export type SProps = SElementProps & { children?: string | string[] };

/**
 * S renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s>
 */
export function S(props?: SProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return s(rest, ...childArray);
}
