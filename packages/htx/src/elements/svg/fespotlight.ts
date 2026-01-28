/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeSpotLightElementProps } from "@fartlabs/ht/svg/feSpotLight";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeSpotLightElementProps };

/**
 * FESPOTLIGHT renders the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight>
 */
export function FESPOTLIGHT(
  props?: FeSpotLightElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feSpotLight",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
