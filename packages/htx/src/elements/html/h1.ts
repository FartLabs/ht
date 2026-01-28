/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H1ElementProps } from "@fartlabs/ht/html/h1";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { H1ElementProps };

/**
 * H1 renders the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H1(
  props?: H1ElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "h1",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
