/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DescElementProps } from "@fartlabs/ht/svg/desc";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DescElementProps };

/**
 * DESC renders the [`desc`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/desc) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/desc>
 */
export function DESC(
  props?: DescElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "desc",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
