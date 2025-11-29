/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FontElementProps } from "../../elements/font.ts";
import { font } from "../../elements/font.ts";

/**
 * FONTProps are the JSX props for the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export type FONTProps = FontElementProps & { children?: string | string[] };

/**
 * FONT renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export function FONT(props?: FONTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return font(rest, ...childArray);
}
