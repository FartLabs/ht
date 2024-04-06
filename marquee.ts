import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MarqueeElementProps are the props for the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/marquee>
 * @deprecated
 */
export interface MarqueeElementProps extends GlobalAttributes {
  /**
   * `behavior` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  behavior?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `direction` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  direction?: string | undefined;
  /**
   * `height` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  height?: string | undefined;
  /**
   * `hspace` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  hspace?: string | undefined;
  /**
   * `loop` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  loop?: string | undefined;
  /**
   * `scrollamount` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  scrollamount?: string | undefined;
  /**
   * `scrolldelay` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  scrolldelay?: string | undefined;
  /**
   * `truespeed` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  truespeed?: string | undefined;
  /**
   * `vspace` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  vspace?: string | undefined;
  /**
   * `width` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * marquee renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/marquee>
 * @deprecated
 */
export function marquee(
  props?: MarqueeElementProps,
  ...children: string[]
): string {
  return renderElement("marquee", props as AnyProps, false, children);
}
