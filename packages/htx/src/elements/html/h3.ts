/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H3ElementProps } from "@fartlabs/ht/html/h3";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { H3ElementProps };

/**
 * H3 renders the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H3(
  props?: H3ElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "h3",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
