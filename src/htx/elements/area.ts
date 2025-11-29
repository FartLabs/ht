/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AreaElementProps } from "../../elements/area.ts";
import { area } from "../../elements/area.ts";

/**
 * AREAProps are the JSX props for the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area>
 */
export type AREAProps = AreaElementProps & { children?: string | string[] };

/**
 * AREA renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area>
 */
export function AREA(props?: AREAProps): string {
  const { children: _children, ...rest } = props ?? {};
  return area(rest);
}
