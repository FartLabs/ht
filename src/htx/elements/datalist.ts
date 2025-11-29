/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DatalistElementProps } from "../../elements/datalist.ts";
import { datalist } from "../../elements/datalist.ts";

/**
 * DATALISTProps are the JSX props for the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist>
 */
export type DATALISTProps = DatalistElementProps & {
  children?: string | string[];
};

/**
 * DATALIST renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist>
 */
export function DATALIST(props?: DATALISTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return datalist(rest, ...childArray);
}
