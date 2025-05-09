/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

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
