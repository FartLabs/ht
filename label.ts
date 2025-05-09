/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LabelElementProps are the props for the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export interface LabelElementProps extends GlobalAttributes {
  /**
   * `for` is an attribute of the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label#for>
   */
  for?: string | undefined;
}

/**
 * label renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export function label(
  props?: LabelElementProps,
  ...children: string[]
): string {
  return renderElement("label", props as AnyProps, false, children);
}
