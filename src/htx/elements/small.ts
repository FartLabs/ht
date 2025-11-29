/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SmallElementProps } from "../../elements/small.ts";
import { small } from "../../elements/small.ts";

/**
 * SMALLProps are the JSX props for the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export type SMALLProps = SmallElementProps & { children?: string | string[] };

/**
 * SMALL renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export function SMALL(props?: SMALLProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return small(rest, ...childArray);
}
