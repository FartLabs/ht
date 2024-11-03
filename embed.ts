/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * EmbedElementProps are the props for the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/embed>
 */
export interface EmbedElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element.
   * @deprecated
   */
  align?: string | undefined;
  /** `height` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element. */
  height?: string | undefined;
  /**
   * `name` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element.
   * @deprecated
   */
  name?: string | undefined;
  /** `src` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element. */
  src?: string | undefined;
  /** `type` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element. */
  type?: string | undefined;
  /** `width` is an attribute of the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element. */
  width?: string | undefined;
}

/**
 * embed renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/embed>
 */
export function embed(props?: EmbedElementProps): string {
  return renderElement("embed", props as AnyProps, true);
}
