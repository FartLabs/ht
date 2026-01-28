/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeCompositeElementProps } from "@fartlabs/ht/svg/feComposite";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeCompositeElementProps };

/**
 * FECOMPOSITE renders the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite>
 */
export function FECOMPOSITE(
  props?: FeCompositeElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feComposite",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
