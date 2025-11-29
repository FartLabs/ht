/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LinkElementProps } from "../../elements/link.ts";
import { link } from "../../elements/link.ts";

/**
 * LINKProps are the JSX props for the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link>
 */
export type LINKProps = LinkElementProps & { children?: string | string[] };

/**
 * LINK renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link>
 */
export function LINK(props?: LINKProps): string {
  const { children: _children, ...rest } = props ?? {};
  return link(rest);
}
