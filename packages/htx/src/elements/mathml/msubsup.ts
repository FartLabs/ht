/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MsubsupElementProps } from "@fartlabs/ht/mathml/msubsup";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MsubsupElementProps };

/**
 * MSUBSUP renders the [`msubsup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup>
 */
export function MSUBSUP(
  props?: MsubsupElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "msubsup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
