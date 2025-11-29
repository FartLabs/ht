/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RbElementProps } from "../../elements/rb.ts";
import { rb } from "../../elements/rb.ts";

/**
 * RBProps are the JSX props for the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export type RBProps = RbElementProps & { children?: string | string[] };

/**
 * RB renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export function RB(props?: RBProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return rb(rest, ...childArray);
}
