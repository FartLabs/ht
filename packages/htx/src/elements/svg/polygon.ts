/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PolygonElementProps } from "@fartlabs/ht/svg/polygon";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { PolygonElementProps };

/**
 * POLYGON renders the [`polygon`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon>
 */
export function POLYGON(
  props?: PolygonElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "polygon",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
