/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OutputElementProps are the props for the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output>
 */
export interface OutputElementProps extends GlobalAttributes {
  /**
   * `for` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output#for>
   */
  for?: string | undefined;
  /**
   * `form` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output#form>
   */
  form?: string | undefined;
  /**
   * `name` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output#name>
   */
  name?: string | undefined;
}

/**
 * output renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output>
 */
export function output(
  props?: OutputElementProps,
  ...children: string[]
): string {
  return renderElement("output", props as AnyProps, false, children);
}
