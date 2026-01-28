/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BdoElementProps } from "@fartlabs/ht/html/bdo";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { BdoElementProps };

/**
 * BDO renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export function BDO(
  props?: BdoElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "bdo",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
