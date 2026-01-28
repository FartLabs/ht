/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MaskElementProps } from "@fartlabs/ht/svg/mask";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MaskElementProps };

/**
 * MASK renders the [`mask`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mask>
 */
export function MASK(
  props?: MaskElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mask",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
