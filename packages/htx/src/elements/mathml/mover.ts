/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MoverElementProps } from "@fartlabs/ht/mathml/mover";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MoverElementProps };

/**
 * MOVER renders the [`mover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover>
 */
export function MOVER(
  props?: MoverElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mover",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
