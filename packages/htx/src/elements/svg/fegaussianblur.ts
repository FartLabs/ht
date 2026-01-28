/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeGaussianBlurElementProps } from "@fartlabs/ht/svg/feGaussianBlur";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeGaussianBlurElementProps };

/**
 * FEGAUSSIANBLUR renders the [`feGaussianBlur`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feGaussianBlur>
 */
export function FEGAUSSIANBLUR(
  props?: FeGaussianBlurElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feGaussianBlur",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
