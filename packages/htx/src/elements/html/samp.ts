/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SampElementProps } from "@fartlabs/ht/html/samp";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SampElementProps };

/**
 * SAMP renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp>
 */
export function SAMP(
  props?: SampElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "samp",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
