/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TtElementProps } from "@fartlabs/ht/html/tt";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TtElementProps };

/**
 * TT renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt>
 * @deprecated
 */
export function TT(
  props?: TtElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tt",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
