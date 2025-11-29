/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * PreElementProps are the props for the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre>
 */
export interface PreElementProps extends GlobalAttributes {
  /**
   * `width` is an attribute of the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * pre renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre>
 */
export function pre(props?: PreElementProps, ...children: string[]): string {
  return renderElement("pre", props as AnyProps, false, children);
}
