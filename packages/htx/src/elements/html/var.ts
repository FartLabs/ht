/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { VarElementProps } from "@fartlabs/ht/html/var";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { VarElementProps };

/**
 * VAR renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export function VAR(
  props?: VarElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "var",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
