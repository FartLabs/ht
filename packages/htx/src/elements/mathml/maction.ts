/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MactionElementProps } from "@fartlabs/ht/mathml/maction";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MactionElementProps };

/**
 * MACTION renders the [`maction`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction>
 * @deprecated
 */
export function MACTION(
  props?: MactionElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "maction",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
