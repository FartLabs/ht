/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TableElementProps } from "../../elements/table.ts";
import { table } from "../../elements/table.ts";

/**
 * TABLEProps are the JSX props for the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export type TABLEProps = TableElementProps & { children?: string | string[] };

/**
 * TABLE renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export function TABLE(props?: TABLEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return table(rest, ...childArray);
}
