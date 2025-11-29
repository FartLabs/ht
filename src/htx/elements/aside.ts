/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AsideElementProps } from "../../elements/aside.ts";
import { aside } from "../../elements/aside.ts";

/**
 * ASIDEProps are the JSX props for the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside>
 */
export type ASIDEProps = AsideElementProps & { children?: string | string[] };

/**
 * ASIDE renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside>
 */
export function ASIDE(props?: ASIDEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return aside(rest, ...childArray);
}
