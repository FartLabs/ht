/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TheadElementProps } from "@fartlabs/ht/html/thead";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TheadElementProps };

/**
 * THEAD renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export function THEAD(
  props?: TheadElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "thead",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
