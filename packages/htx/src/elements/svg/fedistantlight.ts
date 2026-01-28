/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeDistantLightElementProps } from "@fartlabs/ht/svg/feDistantLight";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeDistantLightElementProps };

/**
 * FEDISTANTLIGHT renders the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight>
 */
export function FEDISTANTLIGHT(
  props?: FeDistantLightElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDistantLight",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
