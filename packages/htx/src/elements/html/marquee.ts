/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MarqueeElementProps } from "@fartlabs/ht/html/marquee";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MarqueeElementProps };

/**
 * MARQUEE renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee>
 * @deprecated
 */
export function MARQUEE(
  props?: MarqueeElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "marquee",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
