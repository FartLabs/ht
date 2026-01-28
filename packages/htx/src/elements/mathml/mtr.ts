/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MtrElementProps } from "@fartlabs/ht/mathml/mtr";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MtrElementProps };

/**
 * MTR renders the [`mtr`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr>
 */
export function MTR(
  props?: MtrElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mtr",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
