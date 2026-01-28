/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BlockquoteElementProps } from "@fartlabs/ht/html/blockquote";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { BlockquoteElementProps };

/**
 * BLOCKQUOTE renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote>
 */
export function BLOCKQUOTE(
  props?: BlockquoteElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "blockquote",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
