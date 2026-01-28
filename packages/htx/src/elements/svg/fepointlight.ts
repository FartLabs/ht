/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FePointLightElementProps } from "@fartlabs/ht/svg/fePointLight";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FePointLightElementProps };

/**
 * FEPOINTLIGHT renders the [`fePointLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight>
 */
export function FEPOINTLIGHT(
  props?: FePointLightElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "fePointLight",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
