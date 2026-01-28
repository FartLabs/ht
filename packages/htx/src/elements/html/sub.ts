/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SubElementProps } from "@fartlabs/ht/html/sub";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SubElementProps };

/**
 * SUB renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export function SUB(
  props?: SubElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "sub",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
