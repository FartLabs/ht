/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ForeignObjectElementProps } from "@fartlabs/ht/svg/foreignObject";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ForeignObjectElementProps };

/**
 * FOREIGNOBJECT renders the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject>
 */
export function FOREIGNOBJECT(
  props?: ForeignObjectElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "foreignObject",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
