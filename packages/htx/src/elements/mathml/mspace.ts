/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MspaceElementProps } from "@fartlabs/ht/mathml/mspace";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MspaceElementProps };

/**
 * MSPACE renders the [`mspace`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace>
 */
export function MSPACE(
  props?: MspaceElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mspace",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
