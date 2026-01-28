/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TableElementProps } from "@fartlabs/ht/html/table";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TableElementProps };

/**
 * TABLE renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export function TABLE(
  props?: TableElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "table",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
