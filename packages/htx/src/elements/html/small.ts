/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SmallElementProps } from "@fartlabs/ht/html/small";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SmallElementProps };

/**
 * SMALL renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export function SMALL(
  props?: SmallElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "small",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
