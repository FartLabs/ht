/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SelectedcontentElementProps } from "@fartlabs/ht/html/selectedcontent";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SelectedcontentElementProps };

/**
 * SELECTEDCONTENT renders the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export function SELECTEDCONTENT(
  props?: SelectedcontentElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "selectedcontent",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
