/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BlockquoteElementProps } from "../../elements/blockquote.ts";
import { blockquote } from "../../elements/blockquote.ts";

/**
 * BLOCKQUOTEProps are the JSX props for the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote>
 */
export type BLOCKQUOTEProps = BlockquoteElementProps & {
  children?: string | string[];
};

/**
 * BLOCKQUOTE renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote>
 */
export function BLOCKQUOTE(props?: BLOCKQUOTEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return blockquote(rest, ...childArray);
}
