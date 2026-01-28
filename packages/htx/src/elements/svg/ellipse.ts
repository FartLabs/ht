/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { EllipseElementProps } from "@fartlabs/ht/svg/ellipse";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { EllipseElementProps };

/**
 * ELLIPSE renders the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse>
 */
export function ELLIPSE(
  props?: EllipseElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ellipse",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
