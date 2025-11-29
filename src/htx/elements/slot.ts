/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SlotElementProps } from "../../elements/slot.ts";
import { slot } from "../../elements/slot.ts";

/**
 * SLOTProps are the JSX props for the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot>
 */
export type SLOTProps = SlotElementProps & { children?: string | string[] };

/**
 * SLOT renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot>
 */
export function SLOT(props?: SLOTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return slot(rest, ...childArray);
}
