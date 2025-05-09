/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * EmbedElementProps are the props for the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed>
 */
export interface EmbedElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `height` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed#height>
   */
  height?: string | undefined;
  /**
   * `name` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `src` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed#src>
   */
  src?: string | undefined;
  /**
   * `type` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed#type>
   */
  type?: string | undefined;
  /**
   * `width` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed#width>
   */
  width?: string | undefined;
}

/**
 * embed renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed>
 */
export function embed(props?: EmbedElementProps): string {
  return renderElement("embed", props as AnyProps, true);
}
