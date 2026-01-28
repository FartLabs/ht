/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MpaddedElementProps } from "@fartlabs/ht/mathml/mpadded";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MpaddedElementProps };

/**
 * MPADDED renders the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded>
 */
export function MPADDED(
  props?: MpaddedElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mpadded",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
