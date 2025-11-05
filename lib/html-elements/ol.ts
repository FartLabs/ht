/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * OlElementProps are the props for the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export interface OlElementProps extends GlobalAttributes {
  /**
   * `compact` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#compact>
   * @deprecated
   */
  compact?: string | undefined;
  /**
   * `reversed` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#reversed>
   */
  reversed?: string | undefined;
  /**
   * `start` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#start>
   */
  start?: string | undefined;
  /**
   * `type` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#type>
   */
  type?: string | undefined;
}

/**
 * ol renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export function ol(props?: OlElementProps, ...children: string[]): string {
  return renderElement("ol", props as AnyProps, false, children);
}
