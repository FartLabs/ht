/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TbodyElementProps } from "@fartlabs/ht/html/tbody";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TbodyElementProps };

/**
 * TBODY renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody>
 */
export function TBODY(
  props?: TbodyElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tbody",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
