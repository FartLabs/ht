/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TimeElementProps } from "../../elements/time.ts";
import { time } from "../../elements/time.ts";

/**
 * TIMEProps are the JSX props for the [`time`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time>
 */
export type TIMEProps = TimeElementProps & { children?: string | string[] };

/**
 * TIME renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time>
 */
export function TIME(props?: TIMEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return time(rest, ...childArray);
}
