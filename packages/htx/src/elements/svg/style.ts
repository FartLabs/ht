/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { StyleElementProps } from "@fartlabs/ht/svg/style";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { StyleElementProps };

/**
 * STYLE renders the [`style`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/style>
 */
export function STYLE(
  props?: StyleElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "style",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
