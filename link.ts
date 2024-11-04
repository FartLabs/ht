/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LinkElementProps are the props for the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link>
 */
export interface LinkElementProps extends GlobalAttributes {
  /**
   * `as` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#as>
   */
  as?: string | undefined;
  /**
   * `blocking` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#blocking>
   * @experimental
   */
  blocking?: string | undefined;
  /**
   * `charset` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#charset>
   * @deprecated
   */
  charset?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `disabled` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#disabled>
   */
  disabled?: string | undefined;
  /**
   * `fetchpriority` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#fetchpriority>
   */
  fetchpriority?: string | undefined;
  /**
   * `href` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#href>
   */
  href?: string | undefined;
  /**
   * `hreflang` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#hreflang>
   */
  hreflang?: string | undefined;
  /**
   * `imagesizes` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#imagesizes>
   */
  imagesizes?: string | undefined;
  /**
   * `imagesrcset` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#imagesrcset>
   */
  imagesrcset?: string | undefined;
  /**
   * `integrity` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#integrity>
   */
  integrity?: string | undefined;
  /**
   * `media` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#media>
   */
  media?: string | undefined;
  /**
   * `methods` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#methods>
   * @deprecated
   */
  methods?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `rel` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#rel>
   */
  rel?: string | undefined;
  /**
   * `rev` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#rev>
   * @deprecated
   */
  rev?: string | undefined;
  /**
   * `sizes` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#sizes>
   */
  sizes?: string | undefined;
  /**
   * `target` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#target>
   * @deprecated
   */
  target?: string | undefined;
  /**
   * `type` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link#type>
   */
  type?: string | undefined;
}

/**
 * link renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link>
 */
export function link(props?: LinkElementProps): string {
  return renderElement("link", props as AnyProps, true);
}
