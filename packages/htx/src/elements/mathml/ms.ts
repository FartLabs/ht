/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MsElementProps } from "@fartlabs/ht/mathml/ms";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MsElementProps };

/**
 * MS renders the [`ms`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/ms) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/ms>
 */
export function MS(
  props?: MsElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ms",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
