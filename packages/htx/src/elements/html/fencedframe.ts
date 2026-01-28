/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FencedframeElementProps } from "@fartlabs/ht/html/fencedframe";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FencedframeElementProps };

/**
 * FENCEDFRAME renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export function FENCEDFRAME(
  props?: FencedframeElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "fencedframe",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
