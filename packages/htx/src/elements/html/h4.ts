/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H4ElementProps } from "@fartlabs/ht/html/h4";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { H4ElementProps };

/**
 * H4 renders the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H4(
  props?: H4ElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "h4",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
