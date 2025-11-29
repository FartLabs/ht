/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { EmbedElementProps } from "../../elements/embed.ts";
import { embed } from "../../elements/embed.ts";

/**
 * EMBEDProps are the JSX props for the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed>
 */
export type EMBEDProps = EmbedElementProps & { children?: string | string[] };

/**
 * EMBED renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed>
 */
export function EMBED(props?: EMBEDProps): string {
  const { children: _children, ...rest } = props ?? {};
  return embed(rest);
}
