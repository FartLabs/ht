/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeFloodElementProps } from "@fartlabs/ht/svg/feFlood";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeFloodElementProps };

/**
 * FEFLOOD renders the [`feFlood`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood>
 */
export function FEFLOOD(
  props?: FeFloodElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFlood",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
