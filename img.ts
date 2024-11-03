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
   * @deprecated
   */
  align?: string | undefined;
  /** `alt` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  alt?: string | undefined;
  /**
   * `attributionsrc` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `border` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @deprecated
   */
  border?: string | undefined;
  /** `crossorigin` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  crossorigin?: string | undefined;
  /** `decoding` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  decoding?: string | undefined;
  /** `fetchpriority` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  fetchpriority?: string | undefined;
  /** `height` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  height?: string | undefined;
  /**
   * `hspace` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @deprecated
   */
  hspace?: string | undefined;
  /** `ismap` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  ismap?: string | undefined;
  /** `loading` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  loading?: string | undefined;
  /**
   * `longdesc` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @deprecated
   */
  longdesc?: string | undefined;
  /**
   * `name` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @deprecated
   */
  name?: string | undefined;
  /** `referrerpolicy` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  referrerpolicy?: string | undefined;
  /** `sizes` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  sizes?: string | undefined;
  /** `src` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  src?: string | undefined;
  /** `srcset` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  srcset?: string | undefined;
  /** `usemap` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  usemap?: string | undefined;
  /**
   * `vspace` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
   * @deprecated
   */
  vspace?: string | undefined;
  /** `width` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
  width?: string | undefined;
}

/**
 * img renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img>
 */
export function img(props?: ImgElementProps): string {
  return renderElement("img", props as AnyProps, true);
}
