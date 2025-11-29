/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DlElementProps } from "../../elements/dl.ts";
import { dl } from "../../elements/dl.ts";

/**
 * DLProps are the JSX props for the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl>
 */
export type DLProps = DlElementProps & { children?: string | string[] };

/**
 * DL renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl>
 */
export function DL(props?: DLProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return dl(rest, ...childArray);
}
