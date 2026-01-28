/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DfnElementProps } from "@fartlabs/ht/html/dfn";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DfnElementProps };

/**
 * DFN renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export function DFN(
  props?: DfnElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dfn",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
