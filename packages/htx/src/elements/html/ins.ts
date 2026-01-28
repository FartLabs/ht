/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { InsElementProps } from "@fartlabs/ht/html/ins";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { InsElementProps };

/**
 * INS renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export function INS(
  props?: InsElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ins",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
