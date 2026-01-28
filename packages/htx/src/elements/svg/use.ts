/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { UseElementProps } from "@fartlabs/ht/svg/use";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { UseElementProps };

/**
 * USE renders the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use>
 */
export function USE(
  props?: UseElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "use",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
