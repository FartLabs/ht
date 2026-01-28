/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CanvasElementProps } from "@fartlabs/ht/html/canvas";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { CanvasElementProps };

/**
 * CANVAS renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export function CANVAS(
  props?: CanvasElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "canvas",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
