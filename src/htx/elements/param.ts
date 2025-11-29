/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ParamElementProps } from "../../elements/param.ts";
import { param } from "../../elements/param.ts";

/**
 * PARAMProps are the JSX props for the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export type PARAMProps = ParamElementProps & { children?: string | string[] };

/**
 * PARAM renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export function PARAM(props?: PARAMProps): string {
  const { children: _children, ...rest } = props ?? {};
  return param(rest);
}
