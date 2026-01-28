/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ObjectElementProps } from "@fartlabs/ht/html/object";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ObjectElementProps };

/**
 * OBJECT renders the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object>
 */
export function OBJECT(
  props?: ObjectElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "object",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
