import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LinkElementProps are the props for the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link>
 */
export interface LinkElementProps extends GlobalAttributes {
  /** `as` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  as?: string | undefined;
  /**
   * `blocking` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @experimental
   */
  blocking?: string | undefined;
  /**
   * `charset` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @deprecated
   */
  charset?: string | undefined;
  /** `crossorigin` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  crossorigin?: string | undefined;
  /** `disabled` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  disabled?: string | undefined;
  /** `fetchpriority` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  fetchpriority?: string | undefined;
  /** `href` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  href?: string | undefined;
  /** `hreflang` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  hreflang?: string | undefined;
  /** `imagesizes` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  imagesizes?: string | undefined;
  /** `imagesrcset` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  imagesrcset?: string | undefined;
  /** `integrity` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  integrity?: string | undefined;
  /** `media` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  media?: string | undefined;
  /**
   * `methods` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @deprecated
   */
  methods?: string | undefined;
  /** `referrerpolicy` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  referrerpolicy?: string | undefined;
  /** `rel` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  rel?: string | undefined;
  /**
   * `rev` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @deprecated
   */
  rev?: string | undefined;
  /** `sizes` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  sizes?: string | undefined;
  /**
   * `target` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
   * @deprecated
   */
  target?: string | undefined;
  /** `type` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
  type?: string | undefined;
}

/**
 * link renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link>
 */
export function link(props?: LinkElementProps): string {
  return renderElement("link", props as AnyProps, true);
}
