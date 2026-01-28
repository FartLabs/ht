/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MunderElementProps } from "@fartlabs/ht/mathml/munder";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MunderElementProps };

/**
 * MUNDER renders the [`munder`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder>
 */
export function MUNDER(
  props?: MunderElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "munder",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
