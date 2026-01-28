/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeImageElementProps } from "@fartlabs/ht/svg/feImage";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeImageElementProps };

/**
 * FEIMAGE renders the [`feImage`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage>
 */
export function FEIMAGE(
  props?: FeImageElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feImage",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
