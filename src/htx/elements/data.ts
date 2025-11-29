/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DataElementProps } from "../../elements/data.ts";
import { data } from "../../elements/data.ts";

/**
 * DATAProps are the JSX props for the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export type DATAProps = DataElementProps & { children?: string | string[] };

/**
 * DATA renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export function DATA(props?: DATAProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return data(rest, ...childArray);
}
