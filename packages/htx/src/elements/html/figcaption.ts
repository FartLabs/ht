/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FigcaptionElementProps } from "@fartlabs/ht/html/figcaption";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FigcaptionElementProps };

/**
 * FIGCAPTION renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption>
 */
export function FIGCAPTION(
  props?: FigcaptionElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "figcaption",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
