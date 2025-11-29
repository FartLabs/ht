/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { StrongElementProps } from "../../elements/strong.ts";
import { strong } from "../../elements/strong.ts";

/**
 * STRONGProps are the JSX props for the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong>
 */
export type STRONGProps = StrongElementProps & { children?: string | string[] };

/**
 * STRONG renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong>
 */
export function STRONG(props?: STRONGProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return strong(rest, ...childArray);
}
