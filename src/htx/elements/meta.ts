/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MetaElementProps } from "../../elements/meta.ts";
import { meta } from "../../elements/meta.ts";

/**
 * METAProps are the JSX props for the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export type METAProps = MetaElementProps & { children?: string | string[] };

/**
 * META renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export function META(props?: METAProps): string {
  const { children: _children, ...rest } = props ?? {};
  return meta(rest);
}
