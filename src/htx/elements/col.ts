/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ColElementProps } from "../../elements/col.ts";
import { col } from "../../elements/col.ts";

/**
 * COLProps are the JSX props for the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col>
 */
export type COLProps = ColElementProps & { children?: string | string[] };

/**
 * COL renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col>
 */
export function COL(props?: COLProps): string {
  const { children: _children, ...rest } = props ?? {};
  return col(rest);
}
