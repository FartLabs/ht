/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MphantomElementProps } from "@fartlabs/ht/mathml/mphantom";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MphantomElementProps };

/**
 * MPHANTOM renders the [`mphantom`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom>
 */
export function MPHANTOM(
  props?: MphantomElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mphantom",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
