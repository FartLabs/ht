/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ThElementProps } from "@fartlabs/ht/html/th";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ThElementProps };

/**
 * TH renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th>
 */
export function TH(
  props?: ThElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "th",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
