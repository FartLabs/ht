/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SubElementProps } from "../../elements/sub.ts";
import { sub } from "../../elements/sub.ts";

/**
 * SUBProps are the JSX props for the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export type SUBProps = SubElementProps & { children?: string | string[] };

/**
 * SUB renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export function SUB(props?: SUBProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return sub(rest, ...childArray);
}
