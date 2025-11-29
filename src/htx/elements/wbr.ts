/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { WbrElementProps } from "../../elements/wbr.ts";
import { wbr } from "../../elements/wbr.ts";

/**
 * WBRProps are the JSX props for the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr>
 */
export type WBRProps = WbrElementProps & { children?: string | string[] };

/**
 * WBR renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr>
 */
export function WBR(props?: WBRProps): string {
  const { children: _children, ...rest } = props ?? {};
  return wbr(rest);
}
