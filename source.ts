/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SourceElementProps are the props for the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source>
 */
export interface SourceElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#height>
   */
  height?: string | undefined;
  /**
   * `media` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#media>
   */
  media?: string | undefined;
  /**
   * `sizes` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#sizes>
   */
  sizes?: string | undefined;
  /**
   * `src` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#src>
   */
  src?: string | undefined;
  /**
   * `srcset` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#srcset>
   */
  srcset?: string | undefined;
  /**
   * `type` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#type>
   */
  type?: string | undefined;
  /**
   * `width` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source#width>
   */
  width?: string | undefined;
}

/**
 * source renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source>
 */
export function source(props?: SourceElementProps): string {
  return renderElement("source", props as AnyProps, true);
}
