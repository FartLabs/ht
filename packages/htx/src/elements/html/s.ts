/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SElementProps } from "@fartlabs/ht/html/s";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SElementProps };

/**
 * S renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s>
 */
export function S(
  props?: SElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "s",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
