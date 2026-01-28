/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AbbrElementProps } from "@fartlabs/ht/html/abbr";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AbbrElementProps };

/**
 * ABBR renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr>
 */
export function ABBR(
  props?: AbbrElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "abbr",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
