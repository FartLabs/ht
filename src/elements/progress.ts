/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * ProgressElementProps are the props for the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress>
 */
export interface ProgressElementProps extends GlobalAttributes {
  /**
   * `max` is an attribute of the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress#max>
   */
  max?: string | undefined;
  /**
   * `value` is an attribute of the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress#value>
   */
  value?: string | undefined;
}

/**
 * progress renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress>
 */
export function progress(
  props?: ProgressElementProps,
  ...children: string[]
): string {
  return renderElement("progress", props as AnyProps, false, children);
}
