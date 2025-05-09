/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CaptionElementProps are the props for the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export interface CaptionElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption#align>
   * @deprecated
   */
  align?: string | undefined;
}

/**
 * caption renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export function caption(
  props?: CaptionElementProps,
  ...children: string[]
): string {
  return renderElement("caption", props as AnyProps, false, children);
}
