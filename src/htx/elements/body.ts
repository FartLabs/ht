/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BodyElementProps } from "../../elements/body.ts";
import { body } from "../../elements/body.ts";

/**
 * BODYProps are the JSX props for the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export type BODYProps = BodyElementProps & { children?: string | string[] };

/**
 * BODY renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export function BODY(props?: BODYProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return body(rest, ...childArray);
}
