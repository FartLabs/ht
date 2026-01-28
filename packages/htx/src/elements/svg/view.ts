/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ViewElementProps } from "@fartlabs/ht/svg/view";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ViewElementProps };

/**
 * VIEW renders the [`view`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/view>
 */
export function VIEW(
  props?: ViewElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "view",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
