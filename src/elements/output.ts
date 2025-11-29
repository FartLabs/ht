/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * OutputElementProps are the props for the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output>
 */
export interface OutputElementProps extends GlobalAttributes {
  /**
   * `for` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output#for>
   */
  for?: string | undefined;
  /**
   * `form` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output#form>
   */
  form?: string | undefined;
  /**
   * `name` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output#name>
   */
  name?: string | undefined;
}

/**
 * output renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output>
 */
export function output(
  props?: OutputElementProps,
  ...children: string[]
): string {
  return renderElement("output", props as AnyProps, false, children);
}
