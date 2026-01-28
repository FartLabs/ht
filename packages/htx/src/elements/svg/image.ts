/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ImageElementProps } from "@fartlabs/ht/svg/image";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ImageElementProps };

/**
 * IMAGE renders the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image>
 */
export function IMAGE(
  props?: ImageElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "image",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
