/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LiElementProps } from "../../elements/li.ts";
import { li } from "../../elements/li.ts";

/**
 * LIProps are the JSX props for the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li>
 */
export type LIProps = LiElementProps & { children?: string | string[] };

/**
 * LI renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li>
 */
export function LI(props?: LIProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return li(rest, ...childArray);
}
