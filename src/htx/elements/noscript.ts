/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { NoscriptElementProps } from "../../elements/noscript.ts";
import { noscript } from "../../elements/noscript.ts";

/**
 * NOSCRIPTProps are the JSX props for the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript>
 */
export type NOSCRIPTProps = NoscriptElementProps & {
  children?: string | string[];
};

/**
 * NOSCRIPT renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript>
 */
export function NOSCRIPT(props?: NOSCRIPTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return noscript(rest, ...childArray);
}
