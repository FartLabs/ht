/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { UElementProps } from "@fartlabs/ht/html/u";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { UElementProps };

/**
 * U renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u>
 */
export function U(
  props?: UElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "u",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
