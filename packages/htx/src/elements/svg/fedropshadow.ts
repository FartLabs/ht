/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeDropShadowElementProps } from "@fartlabs/ht/svg/feDropShadow";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeDropShadowElementProps };

/**
 * FEDROPSHADOW renders the [`feDropShadow`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow>
 */
export function FEDROPSHADOW(
  props?: FeDropShadowElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDropShadow",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
