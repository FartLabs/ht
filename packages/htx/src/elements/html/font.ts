/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FontElementProps } from "@fartlabs/ht/html/font";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FontElementProps };

/**
 * FONT renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export function FONT(
  props?: FontElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "font",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
