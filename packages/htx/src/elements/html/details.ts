/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DetailsElementProps } from "@fartlabs/ht/html/details";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DetailsElementProps };

/**
 * DETAILS renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details>
 */
export function DETAILS(
  props?: DetailsElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "details",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
