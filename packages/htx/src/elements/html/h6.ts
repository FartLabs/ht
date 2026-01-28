/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H6ElementProps } from "@fartlabs/ht/html/h6";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { H6ElementProps };

/**
 * H6 renders the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H6(
  props?: H6ElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "h6",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
