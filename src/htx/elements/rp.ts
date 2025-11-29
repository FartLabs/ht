/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RpElementProps } from "../../elements/rp.ts";
import { rp } from "../../elements/rp.ts";

/**
 * RPProps are the JSX props for the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export type RPProps = RpElementProps & { children?: string | string[] };

/**
 * RP renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export function RP(props?: RPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return rp(rest, ...childArray);
}
