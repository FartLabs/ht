/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MunderoverElementProps } from "@fartlabs/ht/mathml/munderover";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MunderoverElementProps };

/**
 * MUNDEROVER renders the [`munderover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover>
 */
export function MUNDEROVER(
  props?: MunderoverElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "munderover",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
