/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MpathElementProps } from "@fartlabs/ht/svg/mpath";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MpathElementProps };

/**
 * MPATH renders the [`mpath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath>
 */
export function MPATH(
  props?: MpathElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mpath",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
