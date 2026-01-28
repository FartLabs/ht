/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MfracElementProps } from "@fartlabs/ht/mathml/mfrac";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MfracElementProps };

/**
 * MFRAC renders the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac>
 */
export function MFRAC(
  props?: MfracElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mfrac",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
