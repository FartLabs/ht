/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SetElementProps } from "@fartlabs/ht/svg/set";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SetElementProps };

/**
 * SET renders the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set>
 */
export function SET(
  props?: SetElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "set",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
