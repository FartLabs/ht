/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SearchElementProps } from "@fartlabs/ht/html/search";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SearchElementProps };

/**
 * SEARCH renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export function SEARCH(
  props?: SearchElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "search",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
