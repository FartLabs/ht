/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeSpecularLightingElementProps are the props for the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting>
 */
export interface FeSpecularLightingElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#in>
   */
  in?: string | undefined;
  /**
   * `kernelUnitLength` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#kernelUnitLength>
   */
  kernelUnitLength?: string | undefined;
  /**
   * `specularConstant` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#specularConstant>
   */
  specularConstant?: string | undefined;
  /**
   * `specularExponent` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#specularExponent>
   */
  specularExponent?: string | undefined;
  /**
   * `surfaceScale` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#surfaceScale>
   */
  surfaceScale?: string | undefined;
}

/**
 * feSpecularLighting renders the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting>
 */
export function feSpecularLighting(
  props?: FeSpecularLightingElementProps,
  ...children: string[]
): string {
  return renderElement(
    "feSpecularLighting",
    props as AnyProps,
    false,
    children,
  );
}
