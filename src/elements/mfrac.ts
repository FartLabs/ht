/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MfracElementProps are the props for the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac>
 */
export interface MfracElementProps extends GlobalAttributes {
  /**
   * `denomalign` is an attribute of the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac#denomalign>
   * @deprecated
   */
  denomalign?: string | undefined;
  /**
   * `linethickness` is an attribute of the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac#linethickness>
   */
  linethickness?: string | undefined;
  /**
   * `numalign` is an attribute of the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac#numalign>
   * @deprecated
   */
  numalign?: string | undefined;
}

/**
 * mfrac renders the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac>
 */
export function mfrac(
  props?: MfracElementProps,
  ...children: string[]
): string {
  return renderElement("mfrac", props as AnyProps, false, children);
}
