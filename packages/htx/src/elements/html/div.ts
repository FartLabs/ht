/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DivElementProps } from "@fartlabs/ht/html/div";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DivElementProps };

/**
 * DIV renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div>
 */
export function DIV(
  props?: DivElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "div",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
