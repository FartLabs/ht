/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MiElementProps } from "@fartlabs/ht/mathml/mi";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MiElementProps };

/**
 * MI renders the [`mi`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi>
 */
export function MI(
  props?: MiElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mi",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
