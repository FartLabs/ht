/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GElementProps } from "@fartlabs/ht/svg/g";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { GElementProps };

/**
 * G renders the [`g`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g>
 */
export function G(
  props?: GElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "g",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
