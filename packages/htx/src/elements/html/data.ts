/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DataElementProps } from "@fartlabs/ht/html/data";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DataElementProps };

/**
 * DATA renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export function DATA(
  props?: DataElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "data",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
