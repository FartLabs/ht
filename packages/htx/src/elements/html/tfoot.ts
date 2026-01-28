/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TfootElementProps } from "@fartlabs/ht/html/tfoot";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TfootElementProps };

/**
 * TFOOT renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot>
 */
export function TFOOT(
  props?: TfootElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tfoot",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
