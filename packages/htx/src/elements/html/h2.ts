/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H2ElementProps } from "@fartlabs/ht/html/h2";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { H2ElementProps };

/**
 * H2 renders the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H2(
  props?: H2ElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "h2",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
