/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ProgressElementProps are the props for the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/progress>
 */
export interface ProgressElementProps extends GlobalAttributes {
  /**
   * `max` is an attribute of the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/progress#max>
   */
  max?: string | undefined;
  /**
   * `value` is an attribute of the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/progress#value>
   */
  value?: string | undefined;
}

/**
 * progress renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/progress>
 */
export function progress(
  props?: ProgressElementProps,
  ...children: string[]
): string {
  return renderElement("progress", props as AnyProps, false, children);
}
