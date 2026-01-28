/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MoElementProps } from "@fartlabs/ht/mathml/mo";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MoElementProps };

/**
 * MO renders the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo>
 */
export function MO(
  props?: MoElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mo",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
