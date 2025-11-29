/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SampElementProps } from "../../elements/samp.ts";
import { samp } from "../../elements/samp.ts";

/**
 * SAMPProps are the JSX props for the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp>
 */
export type SAMPProps = SampElementProps & { children?: string | string[] };

/**
 * SAMP renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp>
 */
export function SAMP(props?: SAMPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return samp(rest, ...childArray);
}
