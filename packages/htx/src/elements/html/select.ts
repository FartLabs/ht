/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SelectElementProps } from "@fartlabs/ht/html/select";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SelectElementProps };

/**
 * SELECT renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export function SELECT(
  props?: SelectElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "select",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
