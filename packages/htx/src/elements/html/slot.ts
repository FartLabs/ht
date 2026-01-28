/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SlotElementProps } from "@fartlabs/ht/html/slot";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SlotElementProps };

/**
 * SLOT renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot>
 */
export function SLOT(
  props?: SlotElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "slot",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
