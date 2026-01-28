/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TextElementProps } from "@fartlabs/ht/svg/text";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TextElementProps };

/**
 * TEXT renders the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text>
 */
export function TEXT(
  props?: TextElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "text",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
