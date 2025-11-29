/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { StyleElementProps } from "../../elements/style.ts";
import { style } from "../../elements/style.ts";

/**
 * STYLEProps are the JSX props for the [`style`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style>
 */
export type STYLEProps = StyleElementProps & { children?: string | string[] };

/**
 * STYLE renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style>
 */
export function STYLE(props?: STYLEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return style(rest, ...childArray);
}
