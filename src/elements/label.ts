/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

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
