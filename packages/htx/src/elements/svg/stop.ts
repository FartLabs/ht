/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { StopElementProps } from "@fartlabs/ht/svg/stop";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { StopElementProps };

/**
 * STOP renders the [`stop`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop>
 */
export function STOP(
  props?: StopElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "stop",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
