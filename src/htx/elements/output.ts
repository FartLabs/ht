/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OutputElementProps } from "../../elements/output.ts";
import { output } from "../../elements/output.ts";

/**
 * OUTPUTProps are the JSX props for the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output>
 */
export type OUTPUTProps = OutputElementProps & { children?: string | string[] };

/**
 * OUTPUT renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output>
 */
export function OUTPUT(props?: OUTPUTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return output(rest, ...childArray);
}
