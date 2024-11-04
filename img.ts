/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ImgElementProps are the props for the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img>
 */
export interface ImgElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `alt` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#alt>
   */
  alt?: string | undefined;
  /**
   * `attributionsrc` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#attributionsrc>
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `border` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#border>
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `decoding` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#decoding>
   */
  decoding?: string | undefined;
  /**
   * `fetchpriority` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#fetchpriority>
   */
  fetchpriority?: string | undefined;
  /**
   * `height` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#height>
   */
  height?: string | undefined;
  /**
   * `hspace` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#hspace>
   * @deprecated
   */
  hspace?: string | undefined;
  /**
   * `ismap` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#ismap>
   */
  ismap?: string | undefined;
  /**
   * `loading` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#loading>
   */
  loading?: string | undefined;
  /**
   * `longdesc` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#longdesc>
   * @deprecated
   */
  longdesc?: string | undefined;
  /**
   * `name` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `sizes` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#sizes>
   */
  sizes?: string | undefined;
  /**
   * `src` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#src>
   */
  src?: string | undefined;
  /**
   * `srcset` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#srcset>
   */
  srcset?: string | undefined;
  /**
   * `usemap` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#usemap>
   */
  usemap?: string | undefined;
  /**
   * `vspace` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#vspace>
   * @deprecated
   */
  vspace?: string | undefined;
  /**
   * `width` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img#width>
   */
  width?: string | undefined;
}

/**
 * img renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img>
 */
export function img(props?: ImgElementProps): string {
  return renderElement("img", props as AnyProps, true);
}
