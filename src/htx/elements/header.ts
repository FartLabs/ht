/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HeaderElementProps } from "../../elements/header.ts";
import { header } from "../../elements/header.ts";

/**
 * HEADERProps are the JSX props for the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export type HEADERProps = HeaderElementProps & { children?: string | string[] };

/**
 * HEADER renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export function HEADER(props?: HEADERProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return header(rest, ...childArray);
}
