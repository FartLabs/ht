/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TdElementProps } from "@fartlabs/ht/html/td";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TdElementProps };

/**
 * TD renders the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td>
 */
export function TD(
  props?: TdElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "td",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
