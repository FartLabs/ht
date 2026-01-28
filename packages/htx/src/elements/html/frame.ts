/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FrameElementProps } from "@fartlabs/ht/html/frame";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FrameElementProps };

/**
 * FRAME renders the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame>
 * @deprecated
 */
export function FRAME(
  props?: FrameElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "frame",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
