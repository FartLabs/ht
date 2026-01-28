/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DelElementProps } from "@fartlabs/ht/html/del";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DelElementProps };

/**
 * DEL renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del>
 */
export function DEL(
  props?: DelElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "del",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
