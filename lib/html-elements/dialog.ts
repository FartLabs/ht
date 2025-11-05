/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * DialogElementProps are the props for the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export interface DialogElementProps extends GlobalAttributes {
  /**
   * `closedby` is an attribute of the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog#closedby>
   * @experimental
   */
  closedby?: string | undefined;
  /**
   * `open` is an attribute of the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog#open>
   */
  open?: string | undefined;
}

/**
 * dialog renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export function dialog(
  props?: DialogElementProps,
  ...children: string[]
): string {
  return renderElement("dialog", props as AnyProps, false, children);
}
