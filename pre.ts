/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * PreElementProps are the props for the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre>
 */
export interface PreElementProps extends GlobalAttributes {
  /**
   * `cols` is an attribute of the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre#cols>
   * @deprecated
   */
  cols?: string | undefined;
  /**
   * `width` is an attribute of the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre#width>
   * @deprecated
   */
  width?: string | undefined;
  /**
   * `wrap` is an attribute of the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre#wrap>
   * @deprecated
   */
  wrap?: string | undefined;
}

/**
 * pre renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre>
 */
export function pre(props?: PreElementProps, ...children: string[]): string {
  return renderElement("pre", props as AnyProps, false, children);
}
