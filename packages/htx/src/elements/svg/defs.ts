/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DefsElementProps } from "@fartlabs/ht/svg/defs";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DefsElementProps };

/**
 * DEFS renders the [`defs`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/defs>
 */
export function DEFS(
  props?: DefsElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "defs",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
