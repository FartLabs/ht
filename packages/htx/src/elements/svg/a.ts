/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AElementProps } from "@fartlabs/ht/svg/a";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AElementProps };

/**
 * A renders the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a>
 */
export function A(
  props?: AElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "a",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
