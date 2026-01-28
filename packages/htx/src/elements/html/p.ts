/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PElementProps } from "@fartlabs/ht/html/p";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { PElementProps };

/**
 * P renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p>
 */
export function P(
  props?: PElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "p",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
