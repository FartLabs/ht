/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * StyleElementProps are the props for the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export interface StyleElementProps extends GlobalAttributes {
  /**
   * `blocking` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style#blocking>
   * @experimental
   */
  blocking?: string | undefined;
  /**
   * `media` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style#media>
   */
  media?: string | undefined;
  /**
   * `type` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style#type>
   * @deprecated
   */
  type?: string | undefined;
}

/**
 * style renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export function style(
  props?: StyleElementProps,
  ...children: string[]
): string {
  return renderElement("style", props as AnyProps, false, children);
}
