/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MsubElementProps } from "@fartlabs/ht/mathml/msub";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MsubElementProps };

/**
 * MSUB renders the [`msub`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub>
 */
export function MSUB(
  props?: MsubElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "msub",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
