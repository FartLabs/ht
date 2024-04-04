import { renderElement } from "./shared/mod.ts";

/**
 * AProps are the props for the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/a
 */
export interface AProps {
  children: unknown[] | undefined;
  attributionsrc: string | undefined;
  /** @deprecated */
  charset: string | undefined;
  /** @deprecated */
  coords: string | undefined;
  download: string | undefined;
  href: string | undefined;
  hreflang: string | undefined;
  implicit_noopener: string | undefined;
  /** @deprecated */
  name: string | undefined;
  ping: string | undefined;
  referrerpolicy: string | undefined;
  rel: string | undefined;
  /** @deprecated */
  rev: string | undefined;
  /** @deprecated */
  shape: string | undefined;
  target: string | undefined;
  text_fragments: string | undefined;
  type: string | undefined;
}

/** a renders the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
export function a(props: AProps): string {
  return renderElement("a", props);
}
