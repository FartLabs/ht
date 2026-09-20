/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AElementProps are the props for the [`a`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a>
 */
export interface AElementProps extends GlobalAttributes {
  /**
   * `href` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a#href>
   */
  href?: string | undefined;
  /**
   * `hreflang` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a#hreflang>
   */
  hreflang?: string | undefined;
  /**
   * `target` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a#target>
   */
  target?: string | undefined;
  /**
   * `type` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a#type>
   */
  type?: string | undefined;
}

/**
 * a renders the [`a`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/a>
 */
export function a(props?: AElementProps, ...children: string[]): string {
  return renderElement("a", props as AnyProps, false, children);
}
