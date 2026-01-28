/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MencloseElementProps } from "@fartlabs/ht/mathml/menclose";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MencloseElementProps };

/**
 * MENCLOSE renders the [`menclose`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/menclose>
 */
export function MENCLOSE(
  props?: MencloseElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "menclose",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
