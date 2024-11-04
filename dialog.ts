/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DialogElementProps are the props for the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dialog>
 */
export interface DialogElementProps extends GlobalAttributes {
  /**
   * `open` is an attribute of the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dialog#open>
   */
  open?: string | undefined;
}

/**
 * dialog renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dialog>
 */
export function dialog(
  props?: DialogElementProps,
  ...children: string[]
): string {
  return renderElement("dialog", props as AnyProps, false, children);
}
