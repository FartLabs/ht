import { renderElement } from "./shared/mod.ts";

/**
 * MarqueeProps are the props for the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/marquee
 */
export interface MarqueeProps {
  children: unknown[] | undefined;
  /** @deprecated */
  behavior: string | undefined;
  /** @deprecated */
  bgcolor: string | undefined;
  /** @deprecated */
  direction: string | undefined;
  /** @deprecated */
  height: string | undefined;
  /** @deprecated */
  hspace: string | undefined;
  /** @deprecated */
  loop: string | undefined;
  /** @deprecated */
  scrollamount: string | undefined;
  /** @deprecated */
  scrolldelay: string | undefined;
  /** @deprecated */
  truespeed: string | undefined;
  /** @deprecated */
  vspace: string | undefined;
  /** @deprecated */
  width: string | undefined;
}

/** marquee renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element. */
export function marquee(props: MarqueeProps): string {
  return renderElement("marquee", props);
}
