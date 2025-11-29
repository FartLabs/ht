/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BdiElementProps } from "../../elements/bdi.ts";
import { bdi } from "../../elements/bdi.ts";

/**
 * BDIProps are the JSX props for the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export type BDIProps = BdiElementProps & { children?: string | string[] };

/**
 * BDI renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export function BDI(props?: BDIProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return bdi(rest, ...childArray);
}
