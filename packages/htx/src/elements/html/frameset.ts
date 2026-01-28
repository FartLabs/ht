/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FramesetElementProps } from "@fartlabs/ht/html/frameset";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FramesetElementProps };

/**
 * FRAMESET renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset>
 * @deprecated
 */
export function FRAMESET(
  props?: FramesetElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "frameset",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
