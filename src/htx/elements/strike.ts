/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { StrikeElementProps } from "../../elements/strike.ts";
import { strike } from "../../elements/strike.ts";

/**
 * STRIKEProps are the JSX props for the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike>
 * @deprecated
 */
export type STRIKEProps = StrikeElementProps & { children?: string | string[] };

/**
 * STRIKE renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike>
 * @deprecated
 */
export function STRIKE(props?: STRIKEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return strike(rest, ...childArray);
}
