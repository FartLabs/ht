/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ClipPathElementProps } from "@fartlabs/ht/svg/clipPath";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ClipPathElementProps };

/**
 * CLIPPATH renders the [`clipPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath>
 */
export function CLIPPATH(
  props?: ClipPathElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "clipPath",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
