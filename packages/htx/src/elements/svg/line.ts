/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LineElementProps } from "@fartlabs/ht/svg/line";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { LineElementProps };

/**
 * LINE renders the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line>
 */
export function LINE(
  props?: LineElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "line",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
