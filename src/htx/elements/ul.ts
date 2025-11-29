/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { UlElementProps } from "../../elements/ul.ts";
import { ul } from "../../elements/ul.ts";

/**
 * ULProps are the JSX props for the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export type ULProps = UlElementProps & { children?: string | string[] };

/**
 * UL renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export function UL(props?: ULProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return ul(rest, ...childArray);
}
