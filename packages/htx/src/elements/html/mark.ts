/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MarkElementProps } from "@fartlabs/ht/html/mark";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MarkElementProps };

/**
 * MARK renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export function MARK(
  props?: MarkElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mark",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
