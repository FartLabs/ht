/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SvgElementProps } from "@fartlabs/ht/svg/svg";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SvgElementProps };

/**
 * SVG renders the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg>
 */
export function SVG(
  props?: SvgElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "svg",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
