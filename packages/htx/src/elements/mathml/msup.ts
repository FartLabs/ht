/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MsupElementProps } from "@fartlabs/ht/mathml/msup";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MsupElementProps };

/**
 * MSUP renders the [`msup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup>
 */
export function MSUP(
  props?: MsupElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "msup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
