/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CaptionElementProps } from "@fartlabs/ht/html/caption";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { CaptionElementProps };

/**
 * CAPTION renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export function CAPTION(
  props?: CaptionElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "caption",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
