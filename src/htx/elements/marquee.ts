/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MarqueeElementProps } from "../../elements/marquee.ts";
import { marquee } from "../../elements/marquee.ts";

/**
 * MARQUEEProps are the JSX props for the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee>
 * @deprecated
 */
export type MARQUEEProps = MarqueeElementProps & {
  children?: string | string[];
};

/**
 * MARQUEE renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee>
 * @deprecated
 */
export function MARQUEE(props?: MARQUEEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return marquee(rest, ...childArray);
}
