/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HrElementProps } from "../../elements/hr.ts";
import { hr } from "../../elements/hr.ts";

/**
 * HRProps are the JSX props for the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr>
 */
export type HRProps = HrElementProps & { children?: string | string[] };

/**
 * HR renders the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr>
 */
export function HR(props?: HRProps): string {
  const { children: _children, ...rest } = props ?? {};
  return hr(rest);
}
