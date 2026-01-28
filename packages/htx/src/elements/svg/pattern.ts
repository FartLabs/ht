/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PatternElementProps } from "@fartlabs/ht/svg/pattern";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { PatternElementProps };

/**
 * PATTERN renders the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern>
 */
export function PATTERN(
  props?: PatternElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "pattern",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
