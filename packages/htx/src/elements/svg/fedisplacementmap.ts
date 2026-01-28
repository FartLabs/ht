/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeDisplacementMapElementProps } from "@fartlabs/ht/svg/feDisplacementMap";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeDisplacementMapElementProps };

/**
 * FEDISPLACEMENTMAP renders the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap>
 */
export function FEDISPLACEMENTMAP(
  props?: FeDisplacementMapElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDisplacementMap",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
