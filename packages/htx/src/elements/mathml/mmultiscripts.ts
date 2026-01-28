/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MmultiscriptsElementProps } from "@fartlabs/ht/mathml/mmultiscripts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MmultiscriptsElementProps };

/**
 * MMULTISCRIPTS renders the [`mmultiscripts`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mmultiscripts>
 */
export function MMULTISCRIPTS(
  props?: MmultiscriptsElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mmultiscripts",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
