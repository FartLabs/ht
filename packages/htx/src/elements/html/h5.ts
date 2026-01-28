/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { H5ElementProps } from "@fartlabs/ht/html/h5";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { H5ElementProps };

/**
 * H5 renders the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H5(
  props?: H5ElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "h5",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
