/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RtElementProps } from "../../elements/rt.ts";
import { rt } from "../../elements/rt.ts";

/**
 * RTProps are the JSX props for the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt>
 */
export type RTProps = RtElementProps & { children?: string | string[] };

/**
 * RT renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt>
 */
export function RT(props?: RTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return rt(rest, ...childArray);
}
