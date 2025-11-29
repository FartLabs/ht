/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { IElementProps } from "../../elements/i.ts";
import { i } from "../../elements/i.ts";

/**
 * IProps are the JSX props for the [`i`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i>
 */
export type IProps = IElementProps & { children?: string | string[] };

/**
 * I renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i>
 */
export function I(props?: IProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return i(rest, ...childArray);
}
