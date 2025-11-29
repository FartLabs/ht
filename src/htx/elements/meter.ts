/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MeterElementProps } from "../../elements/meter.ts";
import { meter } from "../../elements/meter.ts";

/**
 * METERProps are the JSX props for the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter>
 */
export type METERProps = MeterElementProps & { children?: string | string[] };

/**
 * METER renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter>
 */
export function METER(props?: METERProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return meter(rest, ...childArray);
}
