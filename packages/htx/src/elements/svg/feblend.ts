/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeBlendElementProps } from "@fartlabs/ht/svg/feBlend";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeBlendElementProps };

/**
 * FEBLEND renders the [`feBlend`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend>
 */
export function FEBLEND(
  props?: FeBlendElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feBlend",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
