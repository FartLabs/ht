import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * MarqueeProps are the props for the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/marquee
 * @deprecated
 */
export interface MarqueeProps extends GlobalAttributes {
  /** @deprecated */
  behavior?: string | undefined;
  /** @deprecated */
  bgcolor?: string | undefined;
  /** @deprecated */
  direction?: string | undefined;
  /** @deprecated */
  height?: string | undefined;
  /** @deprecated */
  hspace?: string | undefined;
  /** @deprecated */
  loop?: string | undefined;
  /** @deprecated */
  scrollamount?: string | undefined;
  /** @deprecated */
  scrolldelay?: string | undefined;
  /** @deprecated */
  truespeed?: string | undefined;
  /** @deprecated */
  vspace?: string | undefined;
  /** @deprecated */
  width?: string | undefined;
}

/**
 * marquee renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
 * @deprecated
 */
export function marquee(props?: MarqueeProps & ChildrenProps): string {
  return renderElement("marquee", props);
}
