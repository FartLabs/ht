/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MfencedElementProps } from "@fartlabs/ht/mathml/mfenced";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MfencedElementProps };

/**
 * MFENCED renders the [`mfenced`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced>
 * @deprecated
 */
export function MFENCED(
  props?: MfencedElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mfenced",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
