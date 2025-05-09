/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BrElementProps are the props for the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export interface BrElementProps extends GlobalAttributes {
  /**
   * `clear` is an attribute of the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br#clear>
   * @deprecated
   */
  clear?: string | undefined;
}

/**
 * br renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export function br(props?: BrElementProps): string {
  return renderElement("br", props as AnyProps, true);
}
