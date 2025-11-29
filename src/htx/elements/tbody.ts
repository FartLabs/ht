/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TbodyElementProps } from "../../elements/tbody.ts";
import { tbody } from "../../elements/tbody.ts";

/**
 * TBODYProps are the JSX props for the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody>
 */
export type TBODYProps = TbodyElementProps & { children?: string | string[] };

/**
 * TBODY renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody>
 */
export function TBODY(props?: TBODYProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return tbody(rest, ...childArray);
}
