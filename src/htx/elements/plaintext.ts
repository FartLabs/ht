/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PlaintextElementProps } from "../../elements/plaintext.ts";
import { plaintext } from "../../elements/plaintext.ts";

/**
 * PLAINTEXTProps are the JSX props for the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext>
 * @deprecated
 */
export type PLAINTEXTProps = PlaintextElementProps & {
  children?: string | string[];
};

/**
 * PLAINTEXT renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext>
 * @deprecated
 */
export function PLAINTEXT(props?: PLAINTEXTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return plaintext(rest, ...childArray);
}
