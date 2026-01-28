/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SpanElementProps } from "@fartlabs/ht/html/span";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SpanElementProps };

/**
 * SPAN renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export function SPAN(
  props?: SpanElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "span",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
