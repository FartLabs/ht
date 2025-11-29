/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OptionElementProps } from "../../elements/option.ts";
import { option } from "../../elements/option.ts";

/**
 * OPTIONProps are the JSX props for the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export type OPTIONProps = OptionElementProps & { children?: string | string[] };

/**
 * OPTION renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export function OPTION(props?: OPTIONProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return option(rest, ...childArray);
}
