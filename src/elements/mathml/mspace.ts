/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MspaceElementProps are the props for the [`mspace`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace>
 */
export interface MspaceElementProps extends GlobalAttributes {
  /**
   * `depth` is an attribute of the [`mspace`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace#depth>
   */
  depth?: string | undefined;
  /**
   * `height` is an attribute of the [`mspace`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace#height>
   */
  height?: string | undefined;
  /**
   * `width` is an attribute of the [`mspace`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace#width>
   */
  width?: string | undefined;
}

/**
 * mspace renders the [`mspace`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mspace>
 */
export function mspace(
  props?: MspaceElementProps,
  ...children: string[]
): string {
  return renderElement("mspace", props as AnyProps, false, children);
}
