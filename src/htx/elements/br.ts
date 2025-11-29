/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BrElementProps } from "../../elements/br.ts";
import { br } from "../../elements/br.ts";

/**
 * BRProps are the JSX props for the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export type BRProps = BrElementProps & { children?: string | string[] };

/**
 * BR renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export function BR(props?: BRProps): string {
  const { children: _children, ...rest } = props ?? {};
  return br(rest);
}
