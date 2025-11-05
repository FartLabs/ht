/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * DataElementProps are the props for the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export interface DataElementProps extends GlobalAttributes {
  /**
   * `value` is an attribute of the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data#value>
   */
  value?: string | undefined;
}

/**
 * data renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export function data(props?: DataElementProps, ...children: string[]): string {
  return renderElement("data", props as AnyProps, false, children);
}
