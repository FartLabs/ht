/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CodeElementProps } from "../../elements/code.ts";
import { code } from "../../elements/code.ts";

/**
 * CODEProps are the JSX props for the [`code`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code>
 */
export type CODEProps = CodeElementProps & { children?: string | string[] };

/**
 * CODE renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code>
 */
export function CODE(props?: CODEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return code(rest, ...childArray);
}
